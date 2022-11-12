const os=require('os');
console.log(os.arch());
// const freememory=os.totalmem();
// const freememory=os.freemem();
const hostname=os.hostname();
console.log(`${hostname}`);