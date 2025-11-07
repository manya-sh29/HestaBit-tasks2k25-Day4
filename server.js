const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/echo')) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({headers: req.headers}));
  }
  else if (req.url.startsWith('/slow')) {
    const ms = new URL(req.url, `http://${req.headers.host}`).searchParams.get('ms') || 1000;
    setTimeout(() => {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(`Delayed for ${ms} ms`);
    }, ms);
  }
  else if (req.url.startsWith('/cache')) {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Cache-Control': 'max-age=60',
      'ETag': '"12345"'
    });
    res.end('This response is cached');
  }
  else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));
 
