/* 远健动态渲染脚本(手机版中文站/英文站共用)
   数据源:GitHub 仓库 static/news-data.json(走 jsDelivr CDN) → 同域 news-data.json
   上云服务器后:文件放服务器站点根,同域源自动生效 */
(function () {
  var BASE = location.pathname.split('/mobile/')[0] || '';
  var REMOTE = 'https://cdn.jsdelivr.net/gh/xiaoy23333/Madecare-Website@master/static/news-data.json';
  var SAME = BASE + '/news-data.json';
  var isEn = /madecare_En/.test(location.pathname);
  var TEXTS = isEn
    ? { title: 'NEWS', back: 'BACK TO LIST', empty: 'No news yet.', fail: 'Failed to load news, please refresh the page.' }
    : { title: '远健动态', back: '返回列表', empty: '暂无动态', fail: '动态加载失败,请刷新重试' };

  function imgUrl(v) {
    if (!v) return '';
    if (/^(https?:)?\/\//i.test(v)) return v;
    if (v.charAt(0) === '/') return v;
    return BASE + '/' + v;
  }

  var listBox = document.getElementById('news-list');
  var detailBox = document.getElementById('news-detail');
  var detailBody = document.getElementById('news-detail-body');
  var backBtn = document.getElementById('news-back');
  if (!listBox || !detailBox || !detailBody) return;

  function renderDetail(n) {
    var html = '';
    html += '<p class="aui-padded-10 aui-text-center dt">' + TEXTS.title + '</p>';
    html += '<h3 class="aui-padded-10">' + n.title + '</h3>';
    html += '<span class="aui-padded-10">时间：' + (n.time || '') + ' &nbsp;&nbsp;&nbsp;&nbsp; 发布者：' + (n.publisher || '') + '</span>';
    (n.body || []).forEach(function (it) {
      if (it.t === 'title') {
        html += '<p class="aui-padded-10" style="font-weight:800;margin-top:.8rem;">' + it.v + '</p>';
      } else if (it.t === 'img') {
        html += '<img src="' + imgUrl(it.v) + '" style="display:block;width:100%;margin-top:.5rem;">';
      } else if (it.t === 'video') {
        html += '<video controls style="display:block;width:100%;margin-top:.5rem;"><source src="' + it.v + '"></video>';
      } else if (it.t === 'iframe') {
        html += '<iframe width="100%" height="300" frameborder="0" src="' + it.v + '" allowfullscreen style="margin-top:.5rem;"></iframe>';
      } else {
        html += '<p class="aui-padded-10">' + it.v + '</p>';
      }
    });
    detailBody.innerHTML = html;
    listBox.style.display = 'none';
    detailBox.style.display = 'block';
    window.scrollTo(0, 0);
  }

  function renderList(list) {
    var html = '';
    list.forEach(function (n) {
      html += '<a href="javascript:;" class="news-item" data-id="' + n.id + '">'
        + '<div class="aui-content dongtai">'
        + '<ul class="aui-user-view aui-in">'
        + '<li class="aui-user-view-cell aui-img">';
      if (n.src) {
        html += '<img class="aui-img-object aui-pull-left" src="' + imgUrl(n.src) + '">';
      }
      html += '<div class="aui-img-body">'
        + '<span>' + n.title + '<br><br> <em class="aui-text-right">' + (n.time || '') + '</em></span>'
        + '<p class="aui-ellipsis-1">' + (n.cnt || '') + '</p>'
        + '</div></li></ul></div></a>';
    });
    listBox.innerHTML = html;
    var items = listBox.querySelectorAll('.news-item');
    for (var i = 0; i < items.length; i++) {
      items[i].onclick = (function (n) {
        return function () { renderDetail(n); };
      })(list[i]);
    }
  }

  function showFail() {
    listBox.innerHTML = '<p class="aui-padded-10 aui-text-center" style="padding:2rem 0;">' + TEXTS.fail + '</p>';
  }

  if (backBtn) {
    backBtn.onclick = function () {
      detailBox.style.display = 'none';
      listBox.style.display = 'block';
      window.scrollTo(0, 0);
    };
  }

  function fetchJson(url) {
    return fetch(url, { cache: 'no-store' }).then(function (r) {
      if (!r.ok) throw new Error('http ' + r.status);
      return r.json();
    });
  }

  fetchJson(REMOTE)
    .catch(function () { return fetchJson(SAME); })
    .catch(function () { return null; })
    .then(function (data) {
      var list = data && data[isEn ? 'en' : 'zh'];
      if (list && list.length) renderList(list);
      else showFail();
    });
})();
