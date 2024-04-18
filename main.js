#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green.bold("\n \t <=====> Welcome to Sami-Developer's ATM Machine <=====> \n"));
let totalBalance = 10000000;
const pinNumber = 1234;
let pinEntered = await inquirer.prompt([
    {
        type: "number",
        name: "pin",
        message: "Enter your pin number",
    }
]);
//console.log(pinEntered.pin)
if (pinEntered.pin == pinNumber) {
    let atmQuestions = await inquirer.prompt([
        {
            type: 'list',
            name: 'accountType',
            message: 'Select your account type',
            choices: ["Current account", "Savings Account"]
        },
        {
            type: 'list',
            name: 'transMethod',
            message: 'Select your transaction method',
            choices: ["fast cash", "Cash withdrawl"]
        },
    ]);
    if (atmQuestions.transMethod == "Cash withdrawl") {
        let cashwithdrawAmount = await inquirer.prompt([
            {
                type: 'number',
                name: 'withdrawl',
                message: 'Enter the amount you want to withdraw',
            }
        ]);
        // Greater than or equal to operator
        if (totalBalance >= cashwithdrawAmount.withdrawl) {
            totalBalance -= cashwithdrawAmount.withdrawl;
            console.log(chalk.blue.bold(`Your totalBalance is :${totalBalance}`));
        }
        else {
            console.log(chalk.red.bold('Insufficient Balance'));
        }
    }
    else {
        let fastcashAmount = await inquirer.prompt([
            {
                type: 'list',
                name: 'fastCash',
                message: 'Select the amount you want to withdrawl',
                choices: ["5000", "10000", "20000", "50000", "100000"]
            }
        ]);
        if (totalBalance >= fastcashAmount.fastCash) {
            totalBalance -= fastcashAmount.fastCash;
            console.log(chalk.blue.bold(`Your total balance is :${totalBalance}`));
        }
        else {
            console.log(chalk.red.bold('Insufficient Balance'));
        }
    }
}
