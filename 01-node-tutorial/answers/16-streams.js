const { createReadStream } = require('fs');

const stream = createReadStream('../content/big.txt', {
  highWaterMark: 200,
  encoding: 'utf8'
});

let numberOfChunks = 0;

stream.on('data', (result) => {
  numberOfChunks++;
  console.log(result);
});

stream.on('end', () => {
  console.log(`The number of chunks received: ${numberOfChunks}.`);
});

stream.on('error', (err) => {
  console.log(err);
});
