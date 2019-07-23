var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.send('<h1> Test </h1>');
});

// Device orientation
app.get('/orientation', function(req, res){
	res.sendFile(__dirname + '/orientation.html');
});

io.on('connection', function(socket){
	socket.on('orientation change', function(e){
		console.log(e);
	});
});

// Device Motion
app.get('/motion', function(req, res){
	res.sendFile(__dirname + '/motion.html');
});

http.listen(3000, function(){
	console.log('Listening at port: 3000');
});

