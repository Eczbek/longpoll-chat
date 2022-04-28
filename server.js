
const { createServer } = require('http');
const { createReadStream } = require('fs');


const subscribers = [];

createServer((request, response) => {
	if (request.url === '/subscribe')
		return subscribers.push(response);
	if (request.url === '/publish' && request.method === 'POST') {
		subscribers.forEach((subscriber) => request.pipe(subscriber);
		subscribers.length = 0;
	}
	createReadStream('./client.html').pipe(response);
}).listen(8107);