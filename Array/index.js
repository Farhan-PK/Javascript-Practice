// alert("hello");
var books =[];
books= ["a",'b',"c","d","e"];
document.write(books+"<br/>");
// POP method Practice
books.pop();
document.write(books+"<br/>");
// document.getElementsByClassName('array')[0].innerHTML=books+"<br/>";
// PUSH Method Practice
books.push("Farhan","Bashir");
document.write(books+"<br/>");
// Shift Method Practice
books.shift();
document.write(books+"<br/>");
// UNshift Practice
books.unshift("Zeeshan","Seyal");
document.write(books+"<br/>");

// Slice Method Practice
var newArray = books.slice(2,4);
document.write("NEW ARRAY :"+newArray+"<br/>");
document.write(books+"<br/>");
// Splice Methos Practice

books.splice(2,2,"Nomi","Shani");
document.write(books+"<br/>");
