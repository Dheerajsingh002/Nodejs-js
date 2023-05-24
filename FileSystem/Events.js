const eventemitter=require('events');
const { addListener } = require('process');
var EventEmitter=new eventemitter()

// Creating Listeners
var listener1 =(msg) =>
{
    console.log("Hello Sec c From Listener1")
};

// Embeded the Listener
EventEmitter.addListener()
EventEmitter.on()
EventEmitter.once()
EventEmitter.prependListener()
EventEmitter.prependOnceListener()

EventEmitter.on("Event1",listener1);
EventEmitter.on("Event1",(msg)=>
{
    console.log("Hello sec c From inside on Method")
});
EventEmitter.emit()


// Methods 
// -addListener
// -once
// -prepend-
// -remove
// -remove all
// -prepend once
// -remove all 
// -setMaxListeners
