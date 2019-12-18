var bodyParser = require('body-parser');
const express = require('express');
const request = require('request');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

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
  const openId = 'oM8UC1AnmoH89Wz8kFXKThbVijTw';
  const openId1 = 'oM8UC1AnmoH89Wz8kFXKThbVijTw';
  const openId2 = 'oM8UC1AnmoH89Wz8kFXKThbVijTw';
  
  
  const Id = req.body.ID;
  const getSigninUrl = (Id) => {
    return `https://zwechatsodisplay-i072128trial.dispatcher.hanatrial.ondemand.com?salesOrderNo=${Id}`
  };

  const getSigninUrl_d = (Id) => {
    return `https://zwechatsodisplay-i072128trial.dispatcher.hanatrial.ondemand.com?salesOrderNo=${Id}&delivery=true`
  };

  const sType = req.body.type;
  
  console.log(sType);
  console.log(Id);

  if(sType == "D"){
    const sOD = req.body.OD;
    const lfimg = req.body.lfimg;
    const material = req.body.material;
    sendkFMessage(openId, `Sales Order <a href="${getSigninUrl_d(Id)}">${Id}</a> is in process. Outbound delivery ${sOD} send ${lfimg}L ${material}` ,res);
  }else if(sType == "B"){
    sendkFMessage(openId, `Sales Order <a href="${getSigninUrl_d(Id)}">${Id}</a> has been approved.` ,res); 
  //  sendkFMessage(openId1, `Sales Order <a href="${getSigninUrl_d(Id)}">${Id}</a> has been approved.` ,res); 
    sendkFMessage(openId2, `Sales Order <a href="${getSigninUrl_d(Id)}">${Id}</a> has been approved.` ,res); 
  }
  else{
    const status = req.body.status; 
    const bstatus = req.body.bstatus;
    if (bstatus == "Unknow Status") {
 //     sendkFMessage(openId, `Sales Order <a href="${getSigninUrl(Id)}">${Id}</a> created. Status is ${status}` ,res);
        sendkFMessage(openId, `Sales Order <a href="${getSigninUrl(Id)}">${Id}</a> has been blocked and pending for approve.` ,res);
 //       sendkFMessage(openId1, `Sales Order <a href="${getSigninUrl(Id)}">${Id}</a> has been blocked and pending for approve.` ,res);
        sendkFMessage(openId2, `Sales Order <a href="${getSigninUrl(Id)}">${Id}</a> has been blocked and pending for approve.` ,res);
    } else {
      sendkFMessage(openId, `Sales Order <a href="${getSigninUrl(Id)}">${Id}</a> status updated from ${bstatus} to ${status}` ,res);
    }

   
  }

  //const Id = '1234';
 // const status = 'In Process';
  console.log(req.body);


}); 

module.exports = router;
