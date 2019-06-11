const commonConfig = require('./common');
const prodConfig = Object.assign({}, commonConfig, {
  secret: {
    token: 'wechat123456',
    appid: 'wxb4d82dee891d83aa',
    secret: 'aebc551dcf318d050b86da4332235ea7'
  },
  server: 'https://wechat-intergration.herokuapp.com/wechat',
  uiServer: 'https://wechat-intergration.herokuapp.com/sd_wechat_ui-master/',
  sdApi: 'https://ldai1cc2.wdf.sap.corp:50001/sap/opu/odata/sap/API_SALES_ORDER_WITHOUT_CHARGE_SRV/A_SalesOrderWithoutCharge',
  credential: '_SAPI072128:x[MeZU6e[7cdkRk%jse2'
});

module.exports = prodConfig;
