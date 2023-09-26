const http = require('http');

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end('Hello, Node.js server!');
});

const port = 5000;

server.listen(port, () => {
	console.log(`Server is running at ${port}`);
});

