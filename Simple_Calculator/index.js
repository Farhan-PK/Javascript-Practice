function cal() {
    var num1 = parseInt(document.getElementById('first').value);
    var num2 = parseInt(document.getElementById('second').value);
    var oper =document.getElementById('opr').value;
     if(oper === "+")
     {
         var res = num1+num2;
     }
     
     if(oper =='-')
     {

         var res = num1-num2;
     }
     if(oper =='*')
     {

         var res = num1*num2;
     }
     if(oper =='/')
     {

         var res = num1/num2;
     }
     
     if(oper =='%')
     {

         var res = num1%num2;
     }
     
     document.getElementById("res").value=res;
 }
