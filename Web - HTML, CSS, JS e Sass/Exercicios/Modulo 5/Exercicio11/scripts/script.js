const n = prompt("Digite o valor de N");

var result = "";

for (var i = 1; i <= n; i++) {
  var str = "";
  for (var j = 1; j <= i; j++) {
    str = str + `${j} `;
  }
  result += str + "<br/>";
}

document.getElementById("result").innerHTML = result;
