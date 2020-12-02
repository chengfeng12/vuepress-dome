// 引入插件
const moment = require('moment');

module.exports = {
  title: '我是一只鱼',
  description: '我是一只快乐的鱼的网站，欢迎前来参观',
  head: [
    // seo 优化，添加网站说明，利于seo搜索，说明言简意赅，关键词突出
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: '我是一只鱼' }],
    ['meta', { name: 'keywords', content: '我是一只鱼的博客网站，vuepress' }],
  ],
  base: '/dist/',
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          // lang
          moment.locale("zh-cn")
          return moment(timestamp).format("LLLL")
        }
      }
    ]
  ],
  // 如果你的主题名以 vuepress-theme- 开头，你可以使用缩写来省略这个前缀
  // theme: 'yyy',
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/.vuepress/public/images/logo.png',
    // 配置导航栏 navbar false 禁止 默认是 true
    navbar: true,
    nav: [
      { text: 'Home', link: '/', target:'_self', rel:''},
      // 可以不加 /about/
      { text: 'About', link: '/about'},
      // 如果不是内部的路由则显示分享图标
      { text: '分享链接', link: 'https://google.com' },
      {
        text: 'Language',
        // ariable: 'Menu',
        items: [
          { text: 'Home', link: '/'},
          { text: 'About', items: [
            { text: '爱睡觉', link: '/about'},
            { text: '音乐迷', link: '/about2'},
          ]},
        ]
      }
    ],
    // sidebarDepth: 2,
    // displayAllHeaders: true // 默认值：false


    /* 第一种形式 */
    /* sidebar: [
      '/',
      '/about',
      ['/page-a', 'ppp-a'],
      // 第三个参数无效 [link, text]
      ['/page-b', '我是page-b的显示文本']
    ], */
    
    /* 第二种形式 */
    /* sidebar: [
      {
        title: '我的首页', // 必要参数
        // path: '/', // 绝对路径且必须存在 没有的话，是不可点击的
        collapsable: false, // 默认值是 true, 是否折叠
        sidebarDepth: 1,
        children: [
          {
            title: '首页的子集',
            path: '/',
            collapsable: false,
            sidebarDepth: 1,
          }
        ]
      },
      {
        title: '关于我',
        path: '/about',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/page-a',
          '/page-b',
        ]
      }
    ] */

    /* 第三种形式 对象的形式类似第一种 */
    sidebar: {
      "/": [
        '', // 相当于 '/'
        'about',
        'page-a',
        ['page-a', 'pagea - 对象'],
        ['page-b', 'pageb - 对象']
      ]
    }
    
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