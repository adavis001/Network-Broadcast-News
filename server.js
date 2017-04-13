/*jshint esversion:6*/
const net = require('net');

let clientPool = [];
let sender = null;

const server = net.createServer((connection) => {
	clientPool.push(connection);
	console.log('new connection!');
	console.log(connection.id);
	const stdin = process.stdin, stdout = process.stdout;


	connection.write("Insert user name");

	connection.once('data', function(data){
		stringData = data.toString().trim();
		connection.id = stringData;
		console.log(connection.id);
	});

	connection.on('data', (data)=>{
	console.log(data.toString());
	sender = connection.id;
		for(let i = 0; i<clientPool.length; i++){
			if(connection.id !== clientPool[i].id){
				clientPool[i].write(connection.id + ":" + data);
				console.log("sender: " + sender);		
			}
		}
	});

});


server.listen(9001,() => {
	//console.log('ITS OVER 9000!');
});