"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let n = prompt("Enter the Number: ");
let len = n.length;
if (len != 4) {
    console.log("Please Enter a 4 digit Numberr!");
}
else {
    let num = Number(n);
    let rev = 0;
    let c = 0;
    while (num != 0) {
        let rem = num % 10;
        rev = rem + rev * 10;
        num = Math.floor(num / 10);
    }
    console.log("Reversed Number is: " + rev);
}
