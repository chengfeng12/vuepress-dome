const moment = require('moment');
const privateData = require('./privateData');
moment.locale("zh-cn")

module.exports = {
  '@vuepress/last-updated': {
    // 不要忘了安装 moment
      // lang
    transformer: (timestamp, lang) => moment(timestamp).format("LLLL")
  },
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "发现有新的内容",
      buttonText: "更新"
    }
  },
  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',
    // 其他的 Vssue 配置
    owner: 'chengfeng12',
    repo: 'vuepressDome',
    clientId: privateData.clientId,
    clientSecret: privateData.clientSecret,
    // 自动创建评论区域
    autoCreateIssue: true
  },
  '@vuepress/back-to-top': true,
}