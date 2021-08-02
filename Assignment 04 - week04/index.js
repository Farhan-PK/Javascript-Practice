// /*Question-01
// What values do the following expressions evaluate to, console the results?
// 1. false || (true && false);
// 2. true || (1 + 2);
// 3. (1 + 2) || true;
// 4. true && (1 + 2);
// 5. false && (1 + 2);
// 6. (1 + 2) && true;
// 7. (32 * 4) >= 129;
// 8. false !== !true;
// 9. true === 4;
// 10. false === (847 === '847');
// 11. false === (847 == '847');
// 12. (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;*/
console.log("Question-01");
console.log("");
console.log("");

console.log("1. "+false || (true && false));
console.log("2. "+true || (1 + 2));
console.log("3. "+((1 + 2) || true));
console.log("4. "+ (true && (1 + 2)));
console.log("5. "+ (false && (1 + 2)));
console.log("6. "+ ((1 + 2) && true));
console.log("7. "+ ((32 * 4) >= 129));
console.log("8. "+ (false !== !true));
console.log("9. "+ (true === 4));
console.log("10. "+ (false === (847 === '847')));
console.log("11. "+ (false === (847 == '847')));
console.log("12. "+ ((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false));

// // Question-02
// // Add a validation check to ensure that, a number is an integer. If it isn't, then issue an error message and console it.
console.log("Question-02");
console.log("");
console.log("");

var a = 2.3;
console.log("Value of:"+a);
if(typeof a==='number' && (a%1)===0) {
    console.log("integer");
}
else
{
    console.log(" Not integer");
}

// // Question-03
// // Write a js program to find maximum between two numbers.

console.log("Question-03");
console.log("");
console.log("");
var a = prompt("Enter the value Of A: ",);
a=Number(a);
var b = prompt("Enter the value Of B: ",);
b=Number(b);
if(a>b)
{
    console.log("A is Greater Value;");
}
else
{
    console.log("B is Greater Value;");
}

// // Question-04
// // Write a js program to find maximum between three numbers.

console.log("Question-04");
console.log("");
console.log("");
var a = prompt("Enter the value Of A: ",);
a=Number(a);
var b = prompt("Enter the value Of B: ",);
b=Number(b);
var c = prompt("Enter the value Of C: ",);
c=Number(c);

console.log("A: "+a+", B: "+b+", C: "+c);
if(a>b && a>c)
{
    console.log("A= "+a+" is Greater Value;");
}
if(b>a && b>c)
{
    console.log("B= "+b+" is Greater Value;");

}
if(c>b && c>a)
{
    console.log("C "+c+" is Greater Value;");

}

// // Question-05
// // Write a js program to check whether a number is negative, positive or zero.

console.log("Question-05");
console.log("");
console.log("");
var num1 = prompt("Enter a Number: ",);
num1=Number(num1);
console.log(num1);
if(num1>0)
{
    console.log("Number Is +ive");
}
else if(num1===0)
{
    console.log("Number Is Zero");
}
else
{
    console.log("Number Is -ive");
}

// // Question-06
// // Write a js program to check whether a number is divisible by 5 and 11 or not.

console.log("Question-06");
console.log("");
console.log("");
var num1 = prompt("Enter a Number: ",);
num1=Number(num1);
console.log(num1);

if(num1 % 5===0 && num1 % 11===0)
{
    console.log("NUmber is divisible by 5 & 11");
}
else
{
    console.log("Number is divisible not by 5 & 11");
}

//  /*Question-07
// Write a js program to check whether a number is even or odd.*/

console.log("Question-07");
console.log("");
console.log("");
var num2 = prompt("Enter a Number: ",);
num2=Number(num2);
console.log(num2);
if(num2 %2===0)
{
    console.log("NUmber is Even");
}
else{
    
    console.log("Number is Not Even");
}

// // // Question-08
// // // Write a js program to check whether character is an alphabet or not

console.log("Question-08");
console.log("");
console.log("");
var check = prompt("Enter a Value To Check: ",);
if((check=='a'||check=='A')||(check=='b'||check=='B')||(check=='c'||check=='C')||(check=='d'||check=='D')||(check=='e'||check=='E')||(check=='f'||check=='F')||(check=='g'||check=='G')||(check=='h'||check=='H')||(check=='i'||check=='I')||(check=='j'||check=='J')||(check=='k'||check=='K')||(check=='l'||check=='L')||(check=='m'||check=='M')||(check=='n'||check=='N')||(check=='o'||check=='O')||(check=='p'||check=='P')||(check=='q'||check=='Q')||(check=='r'||check=='R')||(check=='s'||check=='S')||(check=='t'||check=='T')||(check=='u'||check=='U')||(check=='v'||check=='V')||(check=='W'||check=='w')||(check=='x'||check=='X')||(check=='y'||check=='Y')||(check=='z'||check=='Z'))
{
    console.log("Character " +check+" is Aplhabet;");
}
else{
    console.log("Character " +check+" is  not Aplhabet;");

}