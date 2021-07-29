var cities = [];
for(var i=0;i < 5;i++)
{
    var a= prompt("Enter Cites Name: ","");
    cities.push(a);
}
for(var i=0;i < 5;i++)
{
    cities[i]=prompt(cities[i],cities[i]);
    cities.splice(i,1,cities[i])
}
alert(cities);
