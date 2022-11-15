const fs=require('fs');
fs.readFile("./UserApi/userapi.json","utf-8",(err,data)=>
{
    console.log(data);
});