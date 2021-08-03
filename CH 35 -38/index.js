// input value from user in String var inputValue="cloUd naTive computinG"
// Convert every first letter of the content in Capitalize case. inputValue="Cloud Native Computing" use Function
// print value in console.log() console.log(inputValue) | check result in browser console

var mes = prompt("Enter Your Message: ",);

function toCapital(message) {

    var arr = message.split(" ");
    for (var i=0;i<arr.length;i++) {
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);

    }
    return message=arr.join(" ");
    
}
mes=toCapital(mes);
console.log(mes);

// ********************************************Question 2****************************************************
// User input value in Number through prompt Example value=5
// Factorialize a Number use Function
// print value in console.log() console.log(value); the result is 120

var num=prompt("Enter A number for factorial: ",);
num= Number(num);
var fact=1;
function factorial(num) {
    if(num===0)
    {
        console.log("Factorial of 0 is is equal to 1");
    }
    else if(num<0)
    {
        console.log("Factorial of -ive is not posible");

    }
    else{
        for(var i=1;i<=num;i++)
    {
        fact=fact*i;
    }
    }
    console.log("Factorial of "+num+" = to "+fact);
}
factorial(num);