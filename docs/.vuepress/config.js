// 引入插件
const headConf = require('./config/headConf');
const pluginConf = require('./config/pluginConf');
const navConf = require('./config/navConf');
const sidebarConf = require('./config/sidebarConf');

module.exports = {
  title: '我是一条鱼',
  description: '我是一只快乐的鱼的网站，欢迎前来参观',
  head: headConf,
  base: '/',
  plugins: pluginConf,
  // 如果你的主题名以 vuepress-theme- 开头，你可以使用缩写来省略这个前缀
  // theme: 'yyy',
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/.vuepress/public/images/logo.png',
    // 配置导航栏 navbar false 禁止 默认是 true
    navbar: true,
    nav: navConf,
    // sidebarDepth: 2,
    // displayAllHeaders: true // 默认值：false

    /* 第三种形式 对象的形式类似第一种 */
    sidebar: sidebarConf
  },
  // 配置别名
  configureWebpack: {
    resolve: {
      alias: {
        '@': '/'
      }
    }
  },
}