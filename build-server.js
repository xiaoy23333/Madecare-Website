// 一键构建"服务器版"(无路径前缀,站点放服务器根目录)
// 用法:在项目目录执行  npm run build:server
// 与 GitHub Pages 版(npm run deploy)互不影响
process.env.SITE_PREFIX = '';

const { spawnSync } = require('child_process');
const isWin = process.platform === 'win32';

const r = spawnSync(isWin ? 'npx.cmd' : 'npx', ['gatsby', 'build'], {
  stdio: 'inherit',
  shell: false,
  env: process.env,
});

process.exit(r.status === null ? 1 : r.status);
