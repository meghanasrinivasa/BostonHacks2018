'use strict';
var AWS = require('aws-sdk'),
var	uuid = require('uuid'),
var	documentClient = new AWS.DynamoDB.DocumentClient(); 
module.exports.hello = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      }),
    };
  
    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
  };
  
// exports.writeMovie = function(event, context, callback){
// 	var params = {
// 		Item : {
// 			"Id" : uuid.v1(),
// 			"Name" : event.name
// 		},
// 		TableName : process.env.TABLE_NAME
// 	};
// 	documentClient.put(params, function(err, data){
// 		callback(err, data);
// 	});
//}