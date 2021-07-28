function Greet() {
    var user = document.getElementById("name").value;
    document.getElementsByClassName("show")[0].innerHTML="Welcome "+user;
   }