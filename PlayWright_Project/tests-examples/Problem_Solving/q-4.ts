import promptSync from 'prompt-sync';
const prompt = promptSync();
let n:string=prompt("Enter the Number: ");
let len=n.length;
let num:number=Number(n);
let temp:number=num;
let sum:number=0;
while(num!=0){
    let rem:number=num%10;
    sum=sum+(Math.pow(rem,len));
    num=Math.floor(num/10);
}
if(sum==temp){
    console.log("Given Number is an Armstrong number");
}
else{
    console.log("Given Number is Not an Armstrong number");
}
