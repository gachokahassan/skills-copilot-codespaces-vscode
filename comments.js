// Create web server
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.method === 'GET') {
    if (req.url === '/') {
      res.statusCode = 200;
      res.end('Hello, World!');
    } else if (req.url === '/about') {
      res.statusCode = 200;
      res.end('About Page');
    } else {
      res.statusCode = 404;
      res.end('Page Not Found');
    }
  } else {
    res.statusCode = 405;
    res.end('Method Not Allowed');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
