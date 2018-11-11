"use strict";
const getToken = require("./spotifyServices/insertEntry");
const spotAPI = require("spotify-web-api-node");
let spotify = new spotAPI();
module.exports.hello = async (event, context) => {
  await getToken
    .getToken()
    .then(async result => {
      console.log(result);
      spotify.setAccessToken(result.Item.tokenId);
      console.log("Auth set");
      await spotify
        .searchTracks("Love")
        .then(track => {
          //console.log("In track " + JSON.stringify(track));
          console.log(
            "In track " + JSON.stringify(track.body.tracks.items[0].id)
          );
          return {
            statusCode: 200,
            body: JSON.stringify({
              message: "Fetched"
              //   input: event,
            })
          };
        })
        .catch(err => {
          console.log("In searc err " + JSON.stringify(err));
          return {
            statusCode: 200,
            body: JSON.stringify({
              message: err
              //   input: event,
            })
          };
        });
    })
    .catch(err => {
      console.log(err);
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: err
          //   input: event,
        })
      };
    });
};
