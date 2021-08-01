// // Take a input from user in number with decimal point user input is 3.4
// // Convert it into greater number Example: Math.ceil(3.4); to 4

// var inputNumber=prompt("Enter A decimal Number like: '0.000' ",);
// inputNumber=Number(inputNumber);
// alert("Before Math(): "+inputNumber);
// inputNumber=Math.ceil(inputNumber);
// alert("Now: "+inputNumber);

// // Declear a variable of string and assign some text var text="This is my dummy text"
// // Slice the text into a new variable from 0 to the rounded number 
// // 0 to 4; Example: text.slice(0, 4) | sliceText = This

// var text = "Hi! Farhan Programer is Here.";
// var newText= text.slice(0,8);
// alert(newText);

// // USe of Replace Function

// var text1 = "Hi! Farhan Programer is Here.Farhan is Ready to learn new technology.";
// var newText2= text1.replace(/Farhan/g,"Zeeshan");
// alert(newText2);

var word= "Hello";
var newWord="";
for (var i=word.length-1;i>=0;i--)
{
    newWord=newWord+word[i];
}
alert(newWord);