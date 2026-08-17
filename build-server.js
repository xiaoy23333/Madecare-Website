// 一键构建"服务器版"(无路径前缀,站点放服务器根目录)
// 用法:在项目目录执行  npm run build:server
// 与 GitHub Pages 版(npm run deploy)互不影响
process.env.SITE_PREFIX = '';

const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// 1. 把手机版整站复制进 static/mobile(gatsby build 时会原样带进 public/mobile)
//    与 deploy 脚本的 xcopy 步骤保持一致
const srcMobile = path.join(__dirname, 'mobile');
const dstMobile = path.join(__dirname, 'static', 'mobile');
fs.rmSync(dstMobile, { recursive: true, force: true });
fs.cpSync(srcMobile, dstMobile, { recursive: true });
console.log('[build-server] mobile → static/mobile 复制完成');

// 2. 直接调用项目内 gatsby 的入口文件,不依赖 npx,Windows/Linux 都稳定
const gatsbyCli = path.join(__dirname, 'node_modules', 'gatsby', 'cli.js');

const r = spawnSync(process.execPath, [gatsbyCli, 'build'], {
  stdio: 'inherit',
  env: process.env,
});

process.exit(r.status === null ? 1 : r.status);
