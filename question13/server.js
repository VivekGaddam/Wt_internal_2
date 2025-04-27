// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('<h1>Welcome to the Node.js Server!</h1>');
  } else if (req.url === '/greet') {
    res.statusCode = 200;
    res.end('<h1>Hello, Welcome to the Greet Page!</h1>');
  } else if (req.url === '/data' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk; 
    });

    req.on('end', () => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        message: 'Data received successfully!',
        data: JSON.parse(body),
      }));
    });
  } else {
    res.statusCode = 404;
    res.end('<h1>Page Not Found</h1>');
  }
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
