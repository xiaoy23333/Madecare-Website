
// gatsby-node.js 配置脚本控制构建和页面（主要控制页面的环境变量）
const replacePath = path => (path === `/` ? path.toLowerCase() : path.replace(/\/$/, ``).toLowerCase())

// Implement the Gatsby API “onCreatePage”. This is called after every page is created.
//实现Gatsby API“ onCreatePage”。这是在创建每个页面后调用。
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  // console.log(page);
  const oldPage = Object.assign({}, page);
  // 删除尾部斜杠，除非页面为/
  page.path = replacePath(page.path);
  //是否生成新页面
  let createNews = false;
  if (page.path !== oldPage.path) {                                                                                                                                                                                                                                                                                                                                                         
    // Replace new page with old page
    deletePage(oldPage);
    createNews = true;
  }
  //根据路由设置对应的layout层
  let excludes = [/cloud/,/product$/];
  // 
  let includes = [
    {r:/index/,l:'index'},//设置首页特定样式
    {r:/solution/,l:'solution'},
    {r:/recruit/,l:'recruit'},
    {r:/product/,l:'product'},
  ];
  let eArr = excludes.filter(r => page.path.match(r));
  let obj = includes.filter(({r,l}) => page.path.match(r))[0];
  if(eArr.length) {

  }else if(obj){
    page.context.layout = obj.l;
    createNews = true;
  }
  // console.log('node-page',page);
  createNews && createPage(page);
};

exports.onCreateWebpackConfig = ({
                                   stage,
                                   rules,
                                   loaders,
                                   plugins,
                                   actions,
                                 }) => {
  //解决window不导入就会报错的问题
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /bad-module/,
          use: loaders.null(),
        },
      ],
    },
  })
};


// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, deletePage } = actions
//   deletePage(page)
//   // 现在可以在页面查询中访问变量“ house”
//   createPage({
//     ...page,
//     context: {
//       ...page.context,
//       house: `Gryffindor`,
//     },
//   })
// }

// //解决window未定义问题，gatsbyv2已经废弃
// exports.modifyWebpackConfig = ({ config, stage }) => {
//   if (stage === 'build-html') {
//     config.loader('null', {
//       test: /fullpage.js/,
//       loader: 'null-loader',
//     })
//   }
// }


