module.exports = [
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
]