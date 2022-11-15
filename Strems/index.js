//Reading from a stream
// Create a freadable Stream
//Handle S  tream events -->data,end, and error
const fs=require('fs');
// fs.writeFile('person.txt',"My name is dheeraj",(err)=>
// {
//     console.log("done");
// })
// fs.appendFileSync("person.txt","Hello WhatsUp guys \n My name is Dheeraj Singh \nplease Like and Share and Subscribeto my chamnel :)")
// fs.readFile('person.txt','utf-8',(err,data)=>
// {
//     console.log(data);
// });



const http=require('http');
const server= http.createServer();
server.on('request',(req,res)=>
{
//     // fs.readFile("input.txt",(err,data)=>
//     // {
//     //     if(err)
//     //     {
//     //         return console.log(err);
//     //     }
//     //     res.end(data.toString());
//     // });
    const rstream=fs.createReadStream('person.txt');
    // rstream.on("data",(chunkdata)=>{
    //     res.write(chunkdata);

    // });
    // rstream.on("end",()=>{
    //     res.end();
    // });
    // rstream.on('error',(err)=>
    // {
    //     console.log(err);
    //     res.end("File not Exist");
    // })
    rstream.pipe(res);

});
server.listen(8000,"127.0.0.1");
