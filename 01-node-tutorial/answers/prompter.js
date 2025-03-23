const http = require('http');
var StringDecoder = require('string_decoder').StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder('utf-8');
  let body = '';
  req.on('data', function (data) {
    body += decode.write(data);
  });
  req.on('end', function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split('&');
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split('=');
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// Variable to store the selected color
let selectedColor = 'white';

// Updated form to use a dropdown menu for color selection
const form = () => {
  return `
  <body style="background-color: ${selectedColor};">
    <p>Select a background color:</p>
    <form method="POST">
      <select name="color">
        <option value="white">White</option>
        <option value="lightblue">Light Blue</option>
        <option value="lightgreen">Light Green</option>
        <option value="yellow">Yellow</option>
        <option value="pink">Pink</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    getBody(req, (body) => {
      if (body['color']) {
        selectedColor = body['color'];
      }
      res.writeHead(303, { Location: '/' });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.on('request', (req) => {
  console.log('event received: ', req.method, req.url);
});

server.listen(3000);
console.log('The server is listening on port 3000.');
