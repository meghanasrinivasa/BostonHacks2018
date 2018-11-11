"use strict";
const qs = require("querystring");
const soptifyAPI = require("spotify-web-api-node");
const spotify = new soptifyAPI();

module.exports.sms = async (event, context) => {
  console.log("body : " + event.body);

  let q = qs.parse(event.body);
  console.log(q.Body);
  console.log(q.From);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: q,
      input: event
    })
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
