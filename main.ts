#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; 
const myPin = 1234;

let pinEntered = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin:",
        type: "number",
    }
]);

if (pinEntered.pin === myPin) {
    let atmQuestion = await inquirer.prompt([
        {
            name: "accountype",
            message: "Select your Account type",
            type: "list",
            choices: ["Current Account", "Saving Account"]
        },
        {
            name: "Transmethod",
            message: "Select Your Transaction Method",
            type: "list",
            choices: ["Cash Withdraw"]
        }
    ]);
    if (atmQuestion.Transmethod === " Cash Withdraw")
      
    {
        let cashwithdrawamount= await inquirer.prompt([{
        name: "withdraw",
        message: "Enter the Amount you want to withdraw",
        type: "number",
    }
]);
if (myBalance >= cashwithdrawamount.withdraw    )
   {
    myBalance -= cashwithdrawamount.withdraw
    console.log (`Your Total Balance Is: ${myBalance}`)
   }
else {
    console.log ('Insufficient Balance')
}
    }
    else {
        let fastCashAmount = await inquirer.prompt(
            [{
                name: "fastCash",
                message: "Enter the Amount you want to withdraw",
                type: "list",
                choices:[
                    "1000",
                    "3000",
                    "5000",
                ]
            }
            ]

        )
        if (myBalance >= fastCashAmount.fastCash   )
   {
    myBalance -= fastCashAmount.fastCash
    console.log (`your total balance is: ${myBalance}`)
   }
else {
    console.log ('Insufficient Balance')
}}
}
