const EventEmitter = require('events');
const event=new EventEmitter();
event.on('checkPage',(sc,msg)=>
{
    console.log(`status code is ${sc} and the page is ${msg}`);
});
// event.on('sayMyName',()=>
// {
//     console.log("Your name is dheeraj");
// })
// event.on('sayMyName',()=>
// {
//     console.log("Your name is Mohan");
// })
// event.on('sayMyName',()=>
// {
//     console.log("Your name is Rohan");
// })
event.emit('checkPage',200,"ok");
