const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Wellcome to our home page');
  }
  if (req.url === '/about') {
    res.end('Wellcome to our short history');
  }
});

server.listen(3000);
