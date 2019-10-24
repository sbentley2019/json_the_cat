const request = require('request');
const args = process.argv.slice(2);

const breedFetcher = function(name, callback) {
  request.get('https://api.thecatapi.com/v1/breeds/search?q=' + name, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (body) {
      body = JSON.parse(body);
      if (body.length > 0) {
        callback(null, body);
      } else {
        callback(new Error("breed wasn't found"), null);
      }
    }
  });
};

breedFetcher(args, (error, resp) => {
  if (!error) {
    console.log(resp[0].description);
  } else {
    console.log("error: ", error);
  }
});