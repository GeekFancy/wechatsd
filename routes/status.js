const express = require('express');
const request = require('request');

const router = express.Router();

const accessTokenHelper = require('../lib/token/access-token');

const sendkFMessage = (userId, kfMessage, res) => {
   accessTokenHelper.getAccessToken(token => {
      if (token) {
        request.post(`https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=${token}`, {
          json: {
            touser: userId,
            msgtype: 'text',
            text:
            {
                "content": kfMessage
            }
          }
        }, (error, response, body) => {
          const result = {
            userId,
            error,
            body
          };

          if (error) {
            res.send({
              ...result,
              message: 'Failed to push message'
            });
          }
          else {
            res.send({
              ...result,
              message: 'Message pushed successfully'
            });
          }

          res.end();
        });

      }
    });
};


router.post('/push', function (req, res, next) {
  const openId = 'oSB6R0eIKYxbduY0iIRTOEcCJ8Ws';
  const Id = req.body.ID;
  const status = req.body.status;
  const bstatus = req.body.bstatus;
  //const Id = '1234';
 // const status = 'In Process';
  console.log(req.body);

  const getSigninUrl = () => {
    return `https://personslist-test.cfapps.eu10.hana.ondemand.com/`
  };

  sendkFMessage(openId, `Sales Order <a href="${getSigninUrl()}">${Id}</a> status updated from ${bstatus} to ${status}` ,res);
}); 

module.exports = router;
