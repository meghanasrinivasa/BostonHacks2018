// const spotifySDK = require("spotify-web-api-node");
// const spotify = new spotifySDK({
//   clientId: process.env.spoitfyCID,
//   clientSecret: process.env.spotifyCSecret,
//   redirectUri: process.env.spotifyRedirect
// });
const request = require("request");
function auth() {}

module.exports = {
  search: function(songString) {
    console.log("in spotify service");
    return spotify.searchTracks(songString);
    // .then(function(searchData) {
    //   console.log(JSON.stringify(searchData));
    // })
    // .catch(function(err) {
    //   console.log("Error : " + JSON.stringify(err));
    // });
  }
};
