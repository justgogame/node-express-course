const { writeFile, readFile } = require('fs').promises;

const writer = async () => {
  try {
    for (let i = 0; i < 3; i++) {
      await writeFile('./temporary/temp.txt', ` The line #${i}.\n`, {
        flag: 'a'
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const reader = async () => {
  try {
    const data = await readFile('./temporary/temp.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const readWrite = async () => {
  await writer();
  await reader();
};
readWrite();
