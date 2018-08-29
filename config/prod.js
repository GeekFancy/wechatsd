const commonConfig = require('./common');
const prodConfig = Object.assign({}, commonConfig, {
  secret: {
    appid: 'wx27da4d9c25135f8b',
    secret: 'b8a6ac1939347ca5fddc4ebeca204710'
  }
});

module.exports = prodConfig;
