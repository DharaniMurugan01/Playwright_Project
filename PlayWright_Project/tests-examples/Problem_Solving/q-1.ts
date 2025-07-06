import promptSync from 'prompt-sync';
const prompt = promptSync();
let n1:string=prompt("Enter the Number 1: ");
let num1:number=parseInt(n1);
let n2:string=prompt("Enter the Number 2: ");
let num2:number=parseInt(n2);
if(num1<0 || num2<0){
    console.log("Invalid Numbers");
}
else{
    console.log(num1+num2);
    console.log(Math.abs(num1-num2));
    console.log(num1*num2);
    console.log(num1/num2);
}