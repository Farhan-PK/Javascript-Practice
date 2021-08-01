var cities=["multan","lahore","karachi","quetta"];
var checkCity= prompt("Enter Your City to check: ",);
checkCity=checkCity.toLowerCase();
var flag=false;

for(var i=0;i<cities.length;i++)
{
    if(checkCity===cities[i])
    {
        alert("City is Regester!");
        flag=true;
        break;
    }
}
if(flag===false)
{
    alert("city is not Regestor!");
}