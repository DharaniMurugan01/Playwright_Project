import promptSync from 'prompt-sync';
const prompt = promptSync();
let n:string=prompt("Enter the Number: ");
let len=n.length;
if(len!=4){
    console.log("Please Enter a 4 digit Numberr!");
}
else{
let num:number=Number(n);
let rev:number=0;
let c=0;
while(num!=0){
    let rem=num%10;
    rev=rem+rev*10;
    num=Math.floor(num/10);
}
console.log("Reversed Number is: "+rev);
}