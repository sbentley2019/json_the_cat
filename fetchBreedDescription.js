const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request.get('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (body) {
      body = JSON.parse(body);
      if (body.length > 0) {
        callback(null, body[0].description);
      } else {
        callback(new Error("breed wasn't found"), null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };