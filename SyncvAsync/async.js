const fs=require('fs');
fs.writeFileSync('index.txt',"My name is Dheeraj Singh");
//Asynchronous
const fs=require('fs');
fs.readFile("rename.txt",'utf-8',(err,data) => {
    console.log(data);
});
console.log("hii")