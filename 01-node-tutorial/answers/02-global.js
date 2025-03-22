console.log(__dirname);

setInterval(() => {
  console.log('Hello');
  console.log(process.env.MY_VAR);
}, 1000);
