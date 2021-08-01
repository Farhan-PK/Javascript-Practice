var para ="Farhan Is New Programer having 2 years of Exprence";
alert(para);
var changeWord =prompt("Ente Word toChange: ",);
for(var i=0;i<para.length;i++)
{
    if(para.slice(i,i+changeWord.length)===changeWord)
    {
        para=para.slice(0,i)+" Farhan2 "+para.slice(i+changeWord.length);
        alert(para);
        break;
    }
}
