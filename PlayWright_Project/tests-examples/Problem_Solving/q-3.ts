import promptSync from 'prompt-sync';
function fib(n:number){
    let f=0;
    let s=1;
    let res="0 1 ";
    for(let i=0;i<n-2;i++){
        let temp=f+s;
        res+=temp+" ";
        f=s;
        s=temp;
    }
    console.log(res);
}
const prompt = promptSync();
let n:string=prompt("Enter the Exit Value of Fibonacci series :");
let num:number=Number(n);
fib(num);