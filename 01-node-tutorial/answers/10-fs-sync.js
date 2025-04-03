const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

for (let i = 0; i < 3; i++) {
  writeFileSync(
    './temporary/fileA.txt',
    ` Here is the result : ${first}, ${second}.\n`,
    { flag: 'a' }
  );
}

const fileA = readFileSync('./temporary/fileA.txt', 'utf8');

console.log(fileA);
