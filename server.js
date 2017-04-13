/*jshint esversion:6*/
const net = require('net');

let clientPool = [];

const server = net.createServer((connection) => {
	clientPool.push(connection);
	console.log('new connection!');
	
	connection.on('data', (data)=>{
	console.log(data.toString());
		for(let i = 0; i<clientPool.length; i++){
			clientPool[i].write(data);		
		}
	});

});


server.listen(9001,() => {
	//console.log('ITS OVER 9000!');
});