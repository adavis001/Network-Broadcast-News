/*jshint esversion:6*/
const net = require('net');

let username = '';

const client = net.connect({port:9001}, ()=> {
	console.log('connected to server');
	// const stdin = process.stdin, stdout = process.stdout;
	// stdout.write("Insert user name" + ": ");

	// stdin.once('data', function(data){
	// 	data = data.toString().trim();
	// 	connection.id = data;
	// 	console.log(`username = ${data}`);
	// });


	process.stdin.on('data',(name)=>{
		client.write(name.toString());
	});

	client.on('data', (data) => {
		console.log(data.toString());
	});
});