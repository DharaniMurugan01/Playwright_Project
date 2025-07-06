"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let n = prompt("Enter the Number: ");
let len = n.length;
let num = Number(n);
let temp = num;
let sum = 0;
while (num != 0) {
    let rem = num % 10;
    sum = sum + (Math.pow(rem, len));
    num = Math.floor(num / 10);
}
if (sum == temp) {
    console.log("Given Number is an Armstrong number");
}
else {
    console.log("Given Number is Not an Armstrong number");
}
