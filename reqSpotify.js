'use strict';
const getToken = require('./spotifyServices/insertEntry');
module.exports.hello = async (event, context) => {
    const tok = await getToken.getToken()
    .then(result => {
        console.log(result);
        return {
            statusCode: 200,
            body: JSON.stringify({
              message: "Fetched",
            //   input: event,
            }),
          };
    })
    .catch(err => {
        console.log(err);
        return {
            statusCode: 200,
            body: JSON.stringify({
              message: err,
            //   input: event,
            }),
          };
    })
};
  