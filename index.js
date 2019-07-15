var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.send('<h1> Test </h1>');
});

app.get('/orientation', function(req, res){
	res.sendFile(__dirname + '/orientation.html');
});

io.on('connection', function(socket){
	socket.on('orientation change', function(e){
		console.log(e);
	});

	socket.on('mobile connected', function(){
		console.log('mobile conntected');
	});
});

http.listen(3000, function(){
	console.log('Listening at port: 3000');
});

