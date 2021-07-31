var num= prompt("Enter A Number:",);
num=Number(num);
var isPrime=false;
for(var i=2; i<num;i++)
{
    if(num%i==0)
    {
        alert("Number is Not Prime:");
        isPrime=true;
        break;
    }
}
if(isPrime==false)
{
    alert("Number is Prime:");
}