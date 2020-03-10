const http = require('http');

const server = http.createServer((req, res) => {
  // if request comes, please do execute this function
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <h1>Hello, From Node.js server</h1>
    <p>An awesome app will be here</p>
  `);
  res.end();
});

console.log(typeof server);
server.listen(3000);
