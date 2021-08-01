// Take a input from user in number with decimal point user input is 3.4
// Convert it into greater number Example: Math.ceil(3.4); to 4

var inputNumber=prompt("Enter A decimal Number like: '0.000' ",);
inputNumber=Number(inputNumber);
alert("Before Math(): "+inputNumber);
inputNumber=Math.ceil(inputNumber);
alert("Now: "+inputNumber);