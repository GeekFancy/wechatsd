const commonConfig = require('./common');
const prodConfig = Object.assign({}, commonConfig, {
  secret: {
    token: 'wechat123456',
    appid: 'wx27da4d9c25135f8b',
    secret: 'b8a6ac1939347ca5fddc4ebeca204710'
  },
  server: 'https://wechatsd.herokuapp.com/wechat',
  uiServer: 'https://wechatsd.herokuapp.com/sd_wechat_ui-master/',
});

module.exports = prodConfig;
