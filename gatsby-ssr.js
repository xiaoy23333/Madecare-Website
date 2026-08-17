// gatsby-ssr.js 配置页面预渲染（主要用于添加渲染组件到页面中，比如百度地图脚本）

const React = require('react');

// 设备自动跳转：手机打开 PC 版任意页面时，跳到对应语言的手机版首页
exports.onRenderBody = ({ setHeadComponents }) => {
  // 站点前缀在构建时定死:GitHub Pages 版 = /Madecare-Website,服务器版(构建时 SITE_PREFIX 为空)= ''
  const SITE_PREFIX = (process.env.SITE_PREFIX !== undefined ? process.env.SITE_PREFIX : '/Madecare-Website').replace(/\/$/, '');

  const UA_REDIRECT_SCRIPT = (
    <script
      key="ua-redirect"
      dangerouslySetInnerHTML={{
        __html: `(function(){
  var ua = navigator.userAgent.toLowerCase();
  if (!/iphone|ios|android|ipod|mobile/i.test(ua)) return;
  if (/from=mobile/i.test(location.search)) return;
  var prefix = ${JSON.stringify(SITE_PREFIX)};
  var p = location.pathname;
  if (prefix && p.indexOf(prefix) === 0) p = p.slice(prefix.length);
  var isEn = /^\\/(en)(?=\\/|$)/.test(p);
  location.replace(prefix + (isEn ? '/mobile/views/madecare_En/index.html' : '/mobile/views/index.html'));
})();`,
      }}
    />
  );
  setHeadComponents([UA_REDIRECT_SCRIPT]);
};

// exports.onRenderBody = (
//   { setHeadComponents, setPostBodyComponents },
// ) => {
//   // const BAIDU_MAP_SCRIPT = (
//   //   <script
//   //     key={`baidu-map-scripts`}
//   //     src={'http://api.map.baidu.com/api?v=2.0&ak=j5nHekcXufbYWroRN8F0iWO8rNuAqYrX'}
//   //   />
//   // );
//   // setHeadComponents([BAIDU_MAP_SCRIPT]);
// };



