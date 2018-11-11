'use strict';

module.exports.sms = async (event, context) => {

    console.log("body : " + JSON.parse(event.body.Body))
    return {
    statusCode: 200,
    body: JSON.stringify({
      message: '',
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};