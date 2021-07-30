var cities = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var findNumber = prompt("Enter Alphabet:");
findNumber = findNumber.toUpperCase();
for (var i = 0; i < cities.length; i++) {
  if (findNumber === cities[i]) {
    var j = i + 1;
    alert("Alphabet order Number: " + j);
    break;
  }

}
alert(i);
