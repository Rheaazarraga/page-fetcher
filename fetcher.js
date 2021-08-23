const request = require('request'); // use request library to make http request
const fs = require('fs'); // use Node's fs module to write the file
const url = process.argv[2]; //command line 1st argument
const path = process.argv[3]; //command line 2nd argument


// http request
request(url , (error, response, body) => {
  console.log('error: ', error); // print the error if one occurred
  console.log('statusCode: ', response && response.statusCode); // print the response status code if a response was received
  console.log('body: ', body); // print the HTML for the Google homepage

  if (response.statusCode === 200) {
   fs.writeFile(path, body, err => {
      if (err) {
        console.error(err);
        return
      }
      //file successfully written
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`); //body.length shows body size from url
    });
  }
});
