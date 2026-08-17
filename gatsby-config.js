/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// gatsby-config.js 站点配置文件，可配置元数据、插件、垫片脚本，代理等。

module.exports = {
  /* Your site config here */
  // GitHub Pages 默认前缀 /Madecare-Website/;
  // 部署到云服务器(根域名)时,构建前设置空环境变量 SITE_PREFIX=(Windows: set SITE_PREFIX= / PowerShell: $env:SITE_PREFIX="")
  pathPrefix: process.env.SITE_PREFIX !== undefined ? process.env.SITE_PREFIX : '/Madecare-Website/',
  plugins:[
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          modules: {
            namedExport: false
          }
        }
      }
    },
    {
      resolve:'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layouts/index.js')
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve:'gatsby-plugin-intl',
      options:{
        path:`${__dirname}/src/intl`,
        languages:['en','zh'],
        defaultLanguage:'zh',
        redirect: false
      }
    }
  ]
}


// module.exports = {
//   pathPrefix: ``,
// }
