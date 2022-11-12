const fs=require('fs');
fs.mkdir('Dheeraj',(err)=>{
    console.log("Folder Created");
});
fs.writeFile("./Dheeraj/Dheeru.txt","My name is dheeraj Singh\n",(err)=>{
    console.log("File Created");
});
fs.appendFile("./Dheeraj/Dheeru.txt","hello My Name is Gaurav",(err)=>
{
    console.log("File Updated")
});
const read=fs.readFile("./Dheeraj/Dheeru.txt",'utf-8',(hii,data)=>
{
    console.log(data);
});
// fs.rename("./Dheeraj/Dheeru.txt","./Dheeraj/Dhee.txt",(err)=>
// {
//     Console.log("Rename the file");
// });
fs.unlink("./Dheeraj/Dheeru.txt",(err)=>
{
    console.log("Delete tyhe file");
});
fs.rmdir("./Dheeraj",(err)=>
{
    console.log("Folder Deleted");
});