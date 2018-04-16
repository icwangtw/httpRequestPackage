var request = require('request');
var fs = require('fs');

request.get("https://sytantris.github.io/http-examples/future.jpg",)
        .on("error", function(error){
          console.log("error!")
        })
        .on("response", function(response){
          console.log("Response Status Code: ", response.statusCode);
        })
        .on("data", function(){
          console.log("Image downloading...")
        })
        .on("end", function(){
          console.log("Image downloaded!")
        })
        .pipe(fs.createWriteStream('./future.jpg'))
