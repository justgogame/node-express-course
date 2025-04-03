const { writeFile, readFile } = require('fs').promises;

writeFile('./temporary/temp.txt', 'The line #1.\n')
  .then(() => {
    return writeFile('./temporary/temp.txt', 'The line #2.\n', {
      flag: 'a'
    });
  })
  .then(() => {
    return writeFile('./temporary/temp.txt', 'The line #3.\n', {
      flag: 'a'
    });
  })
  .then(() => {
    return readFile('./temporary/temp.txt', 'utf8');
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log('An error occurred: ', error);
  });
