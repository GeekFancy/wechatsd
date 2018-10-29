const express = require('express');
const request = require('request');

const router = express.Router();

const orderStore = require('../lib/store').order;
const salesOrder = require('../lib/createSalesOrder');
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

const createOrderId = () => {
   return '3' + Math.random().toString().substr(2,6);
};

router.post('/create', function (req, res, next) {
  const openId = req.body.OpenId;
  const orderData = req.body;
  const id = createOrderId();
  delete orderData.OpenId;
	console.log(req.body);
  if (!openId) {
    res.send('openID is required!');
  }
  
 console.log(orderData);

  if (orderData) {

   

    //id = salesOrderId;

    // const order = {}
    // order[id] = orderData;
    // console.log(orderData);
    // orderStore.append(order);
   

    

    // orderStore.flush((error) => {
    //   //     sendkFMessage(openId, `Sales order ${id} had been created successfully!` ,res);
    // });
    //const salesOrderId = salesOrder();

    salesOrder().then(function(sid){
      //     var message = "Sales order created: " + data.entry.content.properties.SalesOrderWithoutCharge;
          var message = "Hahaha: " + sid;
          console.log(message);
          sendkFMessage(openId, `Sales Order ${sid} created` ,res);

          const order = {}
          order[sid] = orderData;
          console.log(orderData);
          orderStore.append(order);
         
      
          
      
          orderStore.flush((error) => {
            //     sendkFMessage(openId, `Sales order ${id} had been created successfully!` ,res);
          });

          })

   // console.log("ABC" + salesOrderId);
   // sendkFMessage(openId, `Sales order ${salesOrderId} had been created successfully!` ,res);

  } 
//  res.send('error');
});

module.exports = router;
