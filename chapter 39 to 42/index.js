var course=[];
var totalMarks=500;
var sum=0;
var i=0;
while(i<5){
        course[i]=Number(prompt("Enter Your Marks of Course "+(i+1)),);
        sum=sum+course[i];
        i++;

}
// for(var i=0;i<5;i++)
// {
//     course[i]=Number(prompt("Enter Your Marks of Course "+(i+1)),);
//     sum=sum+course[i];
// }
var percent=sum*100/totalMarks;
alert("Your Percentage is: "+percent);
switch(percent){
    case 100:
    case 99:
    case 98:
    case 97:
    case 96:
    case 95:
    case 94:
    case 93:
    case 92:
    case 91:
    case 90:
        alert("A+ Grade");
        break;
    case 89:
    case 88:
    case 87:
    case 86:
    case 85:
    case 84:
    case 83:
    case 82:
    case 81:
    case 80:
    case 79:
    case 78:
    case 77:
    case 76:
    case 75:
        alert("A Grade");
        break;
    case 74:
    case 73:
    case 72:
    case 71:
    case 70:
    case 69:
    case 68:
    case 67:
    case 66:
    case 65:
    case 64:
    case 63:
    case 62:
    case 61:
    case 60:
        alert("B Grade");
        break;
    case 59:
    case 58:
    case 57:
    case 56:
    case 55:
    case 54:
    case 53:
    case 52:
    case 51:
    case 50:
    case 49:
    case 48:
    case 47:
    case 46:
    case 45:
        alert("C Grade");
        break;
    default:
        alert("Your are Fail");
}