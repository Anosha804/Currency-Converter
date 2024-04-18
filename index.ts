#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n \t My Currency Converter Application \n"))

// Define the list of currencies and their exchange rates
let exchangeRate : any ={
    "USD" : 1,  // Base Currency
    "EUR" : 0.9,
    "JYP" : 113,
    "CAD" : 1.3,
    "AUD" : 1.65,
    "PKR" : 260,
}

// Prompt the user to select currencies to convert from and to
let user_ans = await inquirer.prompt([
    {
        name : "from_currency",
        type : "list",
        message : "Select the currency to convert from",
        choices : ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name : "to_currency",
        type : "list",
        message : "Select the currency to convert into",
        choices : ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"] 
    },
    {
        name : "amount",
        type : "input",
        message : "Enter the amount to convert: "
    }
]);

// Perform currency conversion by using formula
let from_amount = exchangeRate[user_ans.from_currency];
let to_amount = exchangeRate[user_ans.to_currency];
let amount = user_ans.amount;

// Formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// Display the converted amount
console.log(`Converted amount = ${chalk.green(converted_amount.toFixed(2))}`);