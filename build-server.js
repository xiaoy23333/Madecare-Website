// 一键构建"服务器版"(无路径前缀,站点放服务器根目录)
// 用法:在项目目录执行  npm run build:server
// 与 GitHub Pages 版(npm run deploy)互不影响
process.env.SITE_PREFIX = '';

const { spawnSync } = require('child_process');
const path = require('path');

// 直接调用项目内 gatsby 的入口文件,不依赖 npx,Windows/Linux 都稳定
const gatsbyCli = path.join(__dirname, 'node_modules', 'gatsby', 'cli.js');

const r = spawnSync(process.execPath, [gatsbyCli, 'build'], {
  stdio: 'inherit',
  env: process.env,
});

process.exit(r.status === null ? 1 : r.status);
