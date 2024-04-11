#! /usr/bin/env node
import inquirer from "inquirer";
// import Choice from "inquirer/lib/objects/choice.js";
// import Choices from "inquirer/lib/objects/choices.js";

// let obj:any = {
//     name:"Shahzain Ali Bangash",
//     rollno:111,
//     address:"Karachi"
// }
// let unique = "address"
// console.log(obj[unique]);

let currency:any = {
  USD: 1,
  EURO: 0.93,
  GBP: 0.79,
  PKR: 277,
  INR: 83,
};

let CC:any = await inquirer.prompt([
  {
    name: "from",
    message: "Enter From Currency",
    type: "list",
    choices: ["USD", "EURO", "GBP", "PKR", "INR"],
  },
  {
    name: "to",
    type: "list",
    message: "Enter To Currency",
    choices:["USD", "EURO", "GBP", "PKR", "INR"],
  },
  {
    name:"amount",
    type:"number",
    message:"Enter Your Amount",
  }
]);
let from_amount = currency[CC.from]
let to_amount = currency[CC.to]
let Amount = CC.amount
let base_amount = Amount / from_amount
let converted_amount = base_amount * to_amount
console.log(`One ${CC.from} = ${from_amount}`);
console.log(`One ${CC.to} = ${to_amount}`);
console.log(Math.floor(converted_amount));
