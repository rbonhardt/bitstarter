var express = require('express');

var app = express.createServer(express.logger());

// way to do it without a buffer since fs.readFileSync
// says if you include encoding option ('utf-8') in 
// this case then this function returns a string
app.get('/', function(request, response) {
  var fs = require('fs');
  var content = fs.readFileSync('index.html', 'utf-8');
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

/* since didn't include encoding option here
   readFileSync returns a buffer, so then we need to create
   a buffer with it and then in response use buf.toString
   note: not sure if 'utf-8' need to be included here since 
   encoding when do new Buffer defaults to 'utf8'
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var buf = new Buffer(fs.readFileSync('index.html'), 'utf-8');
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
*/
