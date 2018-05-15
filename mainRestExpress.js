var express = require('express');
const app = express();
var http = require('http').Server(app);

var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true
}));

var messages = [];

app.use(express.static('./html/'));
/* add a message */
app.post('/messages', function(req, res){
	var message = {
	username : req.body.username,
	date : new Date().getTime(),
	message : req.body.message
	}
	messages.push(message);
	res.status(200);
	res.send();
});
/* get all messages */
app.get('/messages', function (req, res){
	res.status(200);
	//res.send(JSON.stringify(messages));
});
/* start http server on port 8080 */
http.listen((8080), function (){
	console.log('listening on *:8080');
})

app.use(express.static('public'));
