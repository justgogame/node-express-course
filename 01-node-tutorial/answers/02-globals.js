console.log(__dirname);
setInterval(()=>{
    console.log('Hey');
    console.log(process.env.MY_VAR);
}, 1000);