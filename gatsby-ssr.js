// gatsby-ssr.js 配置页面预渲染（主要用于添加渲染组件到页面中，比如百度地图脚本）

const React = require('react');

// 设备自动跳转：手机打开 PC 版任意页面时，跳到对应语言的手机版首页
exports.onRenderBody = ({ setHeadComponents }) => {
  const UA_REDIRECT_SCRIPT = (
    <script
      key="ua-redirect"
      dangerouslySetInnerHTML={{
        __html: `(function(){
  var ua = navigator.userAgent.toLowerCase();
  if (!/iphone|ios|android|ipod|mobile/i.test(ua)) return;
  if (/from=mobile/i.test(location.search)) return;
  var seg = location.pathname.replace(/^\\//, '').split('/');
  var base, isEn;
  if (seg[0] === 'en' || seg[0] === 'zh') {
    isEn = seg[0] === 'en';
    base = '';
  } else {
    isEn = seg[1] === 'en';
    base = seg[0] ? '/' + seg[0] : '';
  }
  location.replace(base + (isEn ? '/mobile/views/madecare_En/index.html' : '/mobile/views/index.html'));
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



