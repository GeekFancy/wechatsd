const config = require('../config');
const request = require('request');
var url = config.sdApi + '?$top=1';

// var getTokenOptions = {
//     url: url,
//     method: "GET",
//     json:true,
//     headers: {
//         "content-type": "application/json",
//         'Authorization': "Basic X1NBUEkwNzIxMjg6eFtNZVpVNmVbN2Nka1JrJWpzZTI=",
//         "x-csrf-token" :"fetch"
//     }
// };

// function getToken() {
//     return new Promise(function(resolve,reject){
//         var requestC = request.defaults({jar: true});
//         console.log(url);
//         requestC(getTokenOptions,function(error,response,body){
//          console.log(response);
//          console.log(error.message);
//          var csrfToken = response.headers['x-csrf-token'];
//          if(!csrfToken){
//             console.log("token fetch error");
//             reject({message:"token fetch error"});
//             return;
//          }
//          resolve(csrfToken);
//         }); // end of requestC
//        });
//   }

// function _createSalesOrder(token){
// return new Promise(function(resolve, reject){
//     var oPostData = {
//         "SalesOrderWithoutCharge": "",
//         "SalesOrderWithoutChargeType": "SD2", 
//         "SalesOrganization": "1000",
//         "DistributionChannel": "10",
//         "OrganizationDivision": "10",
//         "SalesGroup": "",
//         "SalesOffice": "",
//         "SalesDistrict": "000001",
//         "SoldToParty": "100003",
//         "to_Item": {
//             "results": [
//             {
//                 "Material": "H11",
//                 "RequestedQuantity": "1",
//                 "RequestedQuantityUnit": "EA",
//                 "to_ScheduleLine": {
//                     "results": [
//                     {
//                     "ScheduleLine": "1",
//                     "OrderQuantityUnit": "EA",
//                     "ConfdOrderQtyByMatlAvailCheck": "1",
//                     "DeliveredQtyInOrderQtyUnit": "1",
//                     "OpenConfdDelivQtyInOrdQtyUnit": "1",
//                     "DelivBlockReasonForSchedLine": ""
//                     }
//                 ]
//                 }
//             }
//             ]
//         }
//         } ;
//     var requestC = request.defaults({jar: true});
//     var createOptions = {
//             url: config.sdApi,
//             method: "POST",
//             json:true,
//             headers: {
//                 "content-type": "application/json",
//                 'x-csrf-token': token
//             },
//             body:oPostData
//     };
    
//     requestC(createOptions,function(error,response,data){
//         if(error){
//             reject(error.message);
//         }else {
//             resolve(data);
//         }
//     });// end of requestC
// }); 
// }


function _callXsjs(){
    return new Promise(function(resolve, reject){

        var requestC = request.defaults({jar: true});
        var createOptions = {
                url: "https://xs01a2cf74a46.hana.ondemand.com/dev/cdp/app/fd/service/xsservices/XS_cc2.xsjs",
                method: "GET"
        };
        
        requestC(createOptions,function(error,response,data){
            if(error){
                reject(error.message);
                console.log(error.message);
            }else {
                resolve(response.body);
                console.log(response);
                console.log(data);
            }

           // res.end();
        });// end of requestC

        
    }); 
    }

module.exports = function createSales(){
    // getToken().then(function(token) {
    // console.log("token received: " + token);
    var sid;
    _callXsjs().then(function(id){
//     var message = "Sales order created: " + data.entry.content.properties.SalesOrderWithoutCharge;
      var message = "Sales order created: " + id;
      console.log(message);
      sid = id;

    }

    )

    return sid;
};