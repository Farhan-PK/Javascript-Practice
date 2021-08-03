// input value from user in String var inputValue="cloUd naTive computinG"
// Convert every first letter of the content in Capitalize case. inputValue="Cloud Native Computing" use Function
// print value in console.log() console.log(inputValue) | check result in browser console

var mes = prompt("Enter Your Message: ",);

function toCapital(message) {

    var arr = message.split(" ");
    for (var i=0;i<arr.length;i++) {
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);

    }
    return message=arr.join(" ");
    
}
mes=toCapital(mes);
console.log(mes);
