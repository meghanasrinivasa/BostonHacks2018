var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-1",
    endpoint: "" //what's the endpoint?
});

var dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });



dynamodb.createTable(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);           // successful response
});