/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// gatsby-config.js 站点配置文件，可配置元数据、插件、垫片脚本，代理等。

module.exports = {
  /* Your site config here */
  plugins:[
    'gatsby-plugin-sass',
    'gatsby-plugin-layout',
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
