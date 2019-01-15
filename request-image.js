// Create a new .js file and using request, make a 'GET' request to 'https://sytantris.github.io/http-examples/future.jpg' using chaining. The chain should:
// Use .on('error') to handle any errors
// Use .on('response') to log the HTTPS response code, response message (response.statusMessage) and content type (response.headers['content-type'])
// Use piping and fs.createWriteStream to save the file to your working directory ('./future.jpg')
var request = require('request');
var fs = require('fs');

var requestPic = 'http://sytantris.github.io/http-examples/future.jpg'


  request.get(requestPic)
    .on('error', function (err){
      throw err;
    })
    .on('response', function (response) {
      console.log('Response Status Code: ', response.statusCode);
    })
    .on('data', function (response){
      console.log('Downloading image...');
    })
    .on('end', function (response){
      console.log('Download complete.');
    })
    .pipe(fs.createWriteStream('./future.jpg'));






