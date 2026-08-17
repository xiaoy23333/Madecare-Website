// 远健动态数据加载层
// 数据源优先级:远程(GitHub 仓库文件,走 jsDelivr CDN)→ 同域(构建时随 static 发布)→ 内置(config.js)
// 上云服务器后:把 news-data.json 放到服务器站点根目录,同域源自动生效;如需关闭远程源,把 REMOTE_URL 设为 ''
import { NEWS_ABSTRACT, NEWS_DETAIL } from '../config';

export const REMOTE_URL = 'https://cdn.jsdelivr.net/gh/xiaoy23333/Madecare-Website@master/static/news-data.json';

// 从当前地址推导站点根。
// 用 __PATH_PREFIX__(webpack 构建时注入,SSR 与客户端都会替换):GitHub Pages 版= '/Madecare-Website/',服务器版= '';
// 不能用 pathname 第一段猜测(服务器根部署时第一段是页面名,不是前缀)
export function siteBase() {
  const p = typeof __PATH_PREFIX__ !== 'undefined' ? __PATH_PREFIX__ : '';
  return String(p).replace(/\/$/, '');
}

// 数据里的图片路径解析:http 开头原样;news-imgs/ 相对站点根;其他原样
export function resolveImg(v) {
  if (!v) return '';
  if (/^(https?:)?\/\//i.test(v) || v.startsWith('/') || v.startsWith('./') || v.startsWith('../')) return v;
  return siteBase() + '/' + v;
}

export function isEnPath() {
  if (typeof window === 'undefined') return false;
  return /^\/(en)(?=\/|$)/.test(window.location.pathname.replace(new RegExp('^' + siteBase().replace(/\//g, '\\/')), ''));
}

// 内置兜底数据:与远程 news-data.json 同构(zh 9 条;en 用 zh 副本,与改造前 PC 英文站行为一致)
function builtinConvert() {
  const zh = NEWS_ABSTRACT.map(a => {
    const key = a.to.split('#')[1];
    const d = NEWS_DETAIL[key] || {};
    const body = (d.items || [])
      .map(it => {
        if (it.txt != null) return { t: 'txt', v: String(it.txt) };
        if (it.src != null) return { t: 'img', v: String(it.src) };
        if (it.title != null) return { t: 'title', v: it.title };
        if (it.video != null) return { t: 'video', v: it.video };
        if (it.iframe != null) return { t: 'iframe', v: it.iframe };
        return null;
      })
      .filter(Boolean);
    return {
      id: key,
      title: a.title,
      time: (d.time || a.time || '').trim(),
      publisher: d.publisher || '冀德远健',
      cnt: a.cnt,
      src: a.src,
      body,
    };
  });
  return { version: 1, zh, en: zh.slice() };
}

export function builtinNews() {
  return builtinConvert();
}

// 加载远程数据;失败返回 null,由调用方回退内置数据
// 数据源顺序自动适配:
//  - GitHub Pages(github.io 域名):远程(GitHub 文件,同事网页编辑)优先,同域副本兜底
//  - 自有域名(云服务器):同域(服务器上的 news-data.json,同事直接改文件)优先,远程兜底
export async function loadNews() {
  if (typeof window === 'undefined') return null;
  const onGithubPages = /github\.io$/i.test(window.location.hostname);
  const sources = onGithubPages
    ? [REMOTE_URL, siteBase() + '/news-data.json']
    : [siteBase() + '/news-data.json', REMOTE_URL];
  const tried = [];
  for (const url of sources) {
    if (!url || tried.includes(url)) continue;
    tried.push(url);
    try {
      const res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) continue;
      const data = await res.json();
      if (data && Array.isArray(data.zh) && data.zh.length) return data;
    } catch (e) {
      // 尝试下一个源
    }
  }
  return null;
}

// 取某语言下的动态列表(远程数据优先,缺回退内置)
export function pickNews(data, locale) {
  const lang = locale === 'en' ? 'en' : 'zh';
  if (data && Array.isArray(data[lang]) && data[lang].length) return data[lang];
  const builtin = builtinNews();
  return builtin[lang] || builtin.zh || [];
}

// 按 id 找详情
export function findNews(data, locale, id) {
  return pickNews(data, locale).find(n => n.id === id) || null;
}
