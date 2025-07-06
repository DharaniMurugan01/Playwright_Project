"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let n1 = prompt("Enter the Number 1: ");
let num1 = parseInt(n1);
let n2 = prompt("Enter the Number 2: ");
let num2 = parseInt(n2);
if (num1 < 0 || num2 < 0) {
    console.log("Invalid Numbers");
}
else {
    console.log(num1 + num2);
    console.log(Math.abs(num1 - num2));
    console.log(num1 * num2);
    console.log(num1 / num2);
}
