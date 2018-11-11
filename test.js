"use strict";
const spotTets = require("./spotifyServices/spotifyServices");
module.exports.hello = async (event, context) => {
  await spotTets
    .search("Love")
    .then(function(searchData) {
      console.log("In then");
      console.log("resp data: " + JSON.stringify(searchData));
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: searchData
          // input: event
        })
      };
    })
    .catch(function(err) {
      console.log("in catch");
      console.log("Error : " + JSON.stringify(err));
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "Gand fat gayi"
          // input: event
        })
      };
    });

  console.log("End of function");
};
