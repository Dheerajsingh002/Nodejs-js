const { mainModule } = require("process");
const add=(a,b)=>
{
    console.log(a+b);
}
const sub=(a,b)=>
{
    console.log(a-b);
}
const mul=(a,b)=>
{
    console.log(a*b);
}
const divide=(a,b)=>
{
    console.log(a/b);
}
module.exports={add,sub,mul,divide};