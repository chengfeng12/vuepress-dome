module.exports = {
  "/": [
    '', // 相当于 '/'
    'about',
    'page-a',
    ['page-a', 'pagea - 对象'],
    ['page-b', 'pageb - 对象'],
    'PWA',
    'vssue',
    '/page/countUp',
    
  ]
}

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