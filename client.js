/*jshint esversion:6*/
const net = require('net');



const client = net.connect({port:9001}, ()=> {
	console.log('connected to server');

	process.stdin.on('data',(name)=>{
		client.write(name.toString());
	});

	client.on('data', (data) => {
		console.log(data.toString());
	});
});