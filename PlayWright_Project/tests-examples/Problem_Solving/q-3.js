"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
function fib(n) {
    let f = 0;
    let s = 1;
    let res = "0 1 ";
    for (let i = 0; i < n - 2; i++) {
        let temp = f + s;
        res += temp + " ";
        f = s;
        s = temp;
    }
    console.log(res);
}
const prompt = (0, prompt_sync_1.default)();
let n = prompt("Enter the Exit Value of Fibonacci series :");
let num = Number(n);
fib(num);
