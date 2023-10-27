let a=prompt("enter the first number");
let b=prompt("enter the second number");

let divi =(a,b,divide)=>{
    divide(a,b)
}

let divide=(a,b)=>{
    let c=a/b
    document.write(`the division of two numbers are ${c}`)
}
divi(a,b,divide)