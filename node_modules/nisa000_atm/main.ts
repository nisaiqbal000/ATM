#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; // dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin:",
        type: "number",
    }
]);

if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationAns);

    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount: ",
                type: "number",
            }
        ]);
        let withdrawalAmount = parseFloat(amountAns.amount); // Parse input as a float
       if (!isNaN(withdrawalAmount) && withdrawalAmount > 0) { // Check if input is a valid number
            myBalance -= withdrawalAmount;
            console.log("Your remaining balance is: " + myBalance);
        } else {
            console.log("Invalid amount entered. Please enter a valid numeric value.");
        }
    } else if (operationAns.operation === "check balance") {
        console.log("your balance is: " + myBalance);
    }
} else {
    console.log("Incorrect pin number");
}
