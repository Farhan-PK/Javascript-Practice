// // Java-script assignments chapter 10 to 14

// // Make a Calculator
// // input a value from user for example num1 is 7
// // input a second value from user for example num2 is 3
// // input a third value from user for example sign is "+" or "-" or "*" or "/" or "%"
// // print operation in alert() 7-3 =4, or 7*3 =21, or 7/3 =2.3, or 7+3 =10 or 7%3 =1

var num1 =Number(prompt("Enter First Number",""));
var num2 =Number(prompt("Enter second Number",""));
var operator =prompt("Enter Operator","");
if(operator=== '+')
{
    var sum =num1 + num2;
    alert("sum of Num1 & Num2 "+" "+ sum);
}
else if(operator ==='-')
{
    sub=num1-num2;
    alert("Subtract of Num1 & Num2"+" "+ sub);
}
else if(operator ==='*')
{
    multiply=num1*num2;
    alert("Multiply of Num1 & Num2"+" "+ multiply);
}
else if(operator ==='/')
{
    divi=num1/num2;
    alert("Division of Num1 & Num2"+" "+ divi);
}
else if(operator ==='%')
{
    mod=num1%num2;
    alert("Modulus of Num1 & Num2"+" "+ mod);
}
else
{
    alert("Your Chose wrong operator");
}

/* ************************************************ */

// Second Assignment - Make a Percentage Calculator
// Get the 5-course number from the userfor example course1 is 70 var totalMarks = 500
// Calculate the total percentage formula: obtainedMarks * 100/ totalMarks
// print output in alert.

var course1 =Number(prompt("enter Your Math marks",""));
var course2 =Number(prompt("enter Your Urdu marks",""));
var course3 =Number(prompt("enter Your Computer marks",""));
var course4 =Number(prompt("enter Your Physics marks",""));
var course5 =Number(prompt("enter Your Chemisrt marks",""));
var sum = course1+course2+course3+course4+course5;
var totalMarks = 500;
var percent= (sum*100)/totalMarks;
console.log(percent);
if (percent>60)
{
    alert("Congress you are pass");
}
else
{
alert("sorry you are fail");
}