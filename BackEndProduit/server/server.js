var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var server = require('http').createServer(app);
var upload = require("express-fileupload");
var fs = require('fs');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(upload());

app.post('/upload', function (req, res) {
      var file = req.files.file;
      var filename = req.files.file.name;

      file.mv(__dirname + "/upload" + "/" + filename, function (err) {
            let arrayFiles = fs.readdirSync(__dirname + "/upload", {withFileTypes: true});
            console.log(arrayFiles);
            if (err){
                  return console.error(err);
            } else if(arrayFiles.filter(file => file.name == filename)){
                  let fileOk = true;
                  let i = 0;

                  while (fileOk) {
                        console.log(arrayFiles[i].isFile());
                        fileOk = false;
                        i++;
                  }
                  console.log(file);
                  console.log('fichier existant');
            } else{
                  console.log("success!");
            }
      });
});
server.listen(5000);