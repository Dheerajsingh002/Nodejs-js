const fs=require('fs');
const biodata ={
    name:"Dheeraj Singh",
    age:18,
    channel:"Dheeraj",
};
const Jsondata=JSON.stringify(biodata);
fs.writeFile("json1.json",Jsondata,(err)=>
{
    console.log("done");
   
}
);
fs.readFile("json1.json","utf-8",(err,data)=>
{
    console.log(data);
    const ob=JSON.parse(data);
    console.log(ob);
})
console.log(Jsondata);
