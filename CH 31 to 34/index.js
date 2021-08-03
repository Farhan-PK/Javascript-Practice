var myName= prompt("enter Your Name: ",);
var date = prompt("enter Your DOB(date): ",);
var month = prompt("enter Your DOB(month): ",);
var year = Number(prompt("enter Your DOB(Year): ",));
var todayTime = Number(new Date().getHours());
var todayYear = Number(new Date().getFullYear());
var dobYear=Number(new Date(year));
var myAge =todayYear-dobYear;

if(todayTime>=0 && todayTime<11)
{
    console.log("Hello, "+myName+" Good Morning");
}
else if(todayTime>=11 && todayTime<15)
{
    console.log("Hello, "+myName+" Good After Noon");
}
else
{
    console.log("Hello, "+myName+" Good Evening");
}
var dobMessage = new Date("1996 02, 08");
console.log("Your DOB is "+dobMessage);

console.log("Your are "+myAge+" Years of age");
