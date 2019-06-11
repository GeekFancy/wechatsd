const home = process.env.location === 'home';

module.exports = {
  secret: {
    token: 'wechat123456',
    appid: 'wxb4d82dee891d83aa',
    secret: 'aebc551dcf318d050b86da4332235ea7',
    encodingAESKey: 'qKZrS7ClCedpfB8ovtIXaOUlnUyd4JhDH44v3STxPyq'
  },
  server: 'https://wechat-intergration.herokuapp.com/wechat',
  uiServer: 'https://wechat-intergration.herokuapp.com/sd_wechat_ui-master/',
  createSOServer: 'https://zwechatsocreate-i072128trial.dispatcher.hanatrial.ondemand.com',
  sdApi: 'https://ldai1cc2.wdf.sap.corp:50001/sap/opu/odata/sap/API_SALES_ORDER_WITHOUT_CHARGE_SRV/A_SalesOrderWithoutCharge/',
  credential: '_SAPI072128:x[MeZU6e[7cdkRk%jse2',
  templates: {
    Featured: '04zVisr--LdimrcGC6qNbExIkUyrn0e3tAYQRbrtvF8',
    NewBlog: 'ZKAOh-mi-r-SV7cHjxJQEyt1UUWgXD8VRyAMvV_KJCQ',
    NewReply: '3H-Kha_OaUbPRx9LK974YLaGRMJk-1KIvMjRNycxHuI',
    Purchase: 'gkFwdlLk6K54t50eDYY9f-c6c75aSmTruNUB90WLW4I'
  }
};
