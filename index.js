#! /usr/bin/env node
import inquirer from "inquirer";
//(1)Computer will generate a random Number.
//(2)User input  a guessing number.
//(3)Compare the one and two numbers.
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10",
    },
]);
console.log(answer);
if (answer.userGuessedNumber === randomNumber) {
    console.log("You won");
}
else {
    console.log("You lost");
}
