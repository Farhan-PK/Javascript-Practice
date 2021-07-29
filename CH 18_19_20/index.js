var cities = [];
for(var i=0;i < 3;i++)
{
    cities.push(prompt("Enter Cites Name: ",""));
}
for(var i=0;i < 3;i++)
{
    cities[i]=prompt(cities[i],cities[i]);
    cities.splice(i,1,cities[i])
}
alert(cities);
