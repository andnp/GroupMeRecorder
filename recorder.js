var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
app.use(bodyParser.json());

app.post('/testing',function(req,res){
	console.log('POST');
	var body = req.body;
	console.log(body);
	var user_id = body.user_id;
	var text = body.text;
	fs.appendFile("files/" + user_id + ".txt", text, function (err) {
	});
	res.sendStatus(200);
});

app.post('/discussion',function(req,res){
	console.log('POST');
	var body = req.body;
	console.log(body);
	var user_id = body.user_id;
	var text = body.text;
	fs.appendFile("files/" + user_id + ".txt", text, function (err) {
	});
	res.sendStatus(200);
});

app.post('/nsfs',function(req,res){
	console.log('POST');
	var body = req.body;
	console.log(body);
	var user_id = body.user_id;
	var text = body.text;
	fs.appendFile("files/" + user_id + ".txt", text, function (err) {
	});
	res.sendStatus(200);
});

app.post('/tallies',function(req,res){
	console.log('POST');
	var body = req.body;
	console.log(body);
	var user_id = body.user_id;
	var text = body.text;
	fs.appendFile("files/" + user_id + ".txt", text, function (err) {
	});
	res.sendStatus(200);
});

var server = app.listen(3000, function(){
});