// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.get('/api/whoAmI',function(req,res, next){
	res.json({software:req.headers['user-agent'].match(/\([^)]*\)/)[0].replace('(','').replace(')',''),
			  language:req.headers['accept-language'].split(';')[0],
        yourIp:req.headers['x-forwarded-for'].split(',')[0]})
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
