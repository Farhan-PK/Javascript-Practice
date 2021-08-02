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