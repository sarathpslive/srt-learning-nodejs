var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var colleagues = [{name: 'Akhil', place: 'Kozhikode'}, {name: 'Jethik', place: 'Kochi'}, {name: 'Anupriya', country:'Thrissur'}];

var app = express();
 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/srt/colleagues', function(request, response){
	response.send(colleagues);
});
app.get('/srt/', function(request, response){
	response.send([{name: 'Sarath', place: 'Koottanad'}]);
});

app.listen(process.env.PORT || 8546);