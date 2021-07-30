var name1=[];
for(var i=0;i<4;i++)
{
  var a =prompt("Enter Name: ",);
  var Letter=a.slice(0,1).toUpperCase()+a.slice(1).toLowerCase();
  name1.push(Letter);
 
  
  // var a =prompt("Enter Name: ",);
  // var firstLetter=a.slice(0,1);
  // firstLetter=firstLetter.toUpperCase();

  // var secLetter = a.slice(1);
  // secLetter=secLetter.toLowerCase();

  // a=firstLetter+secLetter;
  // name1.push(a);
  // alert("Array"+name1);
}
alert(name1);