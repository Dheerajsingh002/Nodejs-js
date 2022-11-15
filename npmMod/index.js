// import chalk from 'chalk';
// // const chalk=require("chalk");
// console.log(chalk.red("Hello World!"));
const validator=require('validator');
const res=validator.isEmail("thapa@thapa.com");
console.log(res ? chalk.green.inverse(res):chalk.red.inverse(res));