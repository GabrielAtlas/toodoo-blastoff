var codigo = -1,
  altura = 0,
  peso = 0;

var i = 0;

var array = [];

do {
  codigo = prompt("Digite seu código");

  while (isNaN(parseInt(codigo))) {
    alert("Digite apenas valores inteiros.");
    codigo = prompt("Digite seu código");
  }

  codigo = parseInt(codigo);

  if (codigo == 0) break;

  altura = prompt("Digite sua altura");

  while (isNaN(parseFloat(altura))) {
    alert("Digite apenas valores.");
    altura = prompt("Digite sua altura");
  }

  altura = parseFloat(altura);

  peso = prompt("Digite seu peso");

  while (isNaN(parseFloat(peso))) {
    alert("Digite apenas valores.");
    peso = prompt("Digite seu peso");
  }

  peso = parseFloat(peso);

  const obj = { i, codigo, altura, peso };

  array[i] = obj;
  i++;
} while (codigo != 0);

console.log(array);

var largest = array
  .sort(function (obj1, obj2) {
    return parseFloat(obj1.altura) - parseFloat(obj2.altura);
  })
  .reverse()[0];

var fatter = array
  .sort(function (obj1, obj2) {
    return parseFloat(obj1.peso) - parseFloat(obj2.peso);
  })
  .reverse()[0];

console.log("Mais alto:", largest);
console.log("Mais gordo", fatter);

document.getElementById(
  "result"
).innerHTML = `A pessoa com ID ${largest.codigo} é a pessoa mais alta e ela possui ${largest.peso}kg e ${largest.altura}m de altura <br/>
A pessoa com ID ${fatter.codigo} é a pessoa mais gorda e ela possui ${fatter.peso}kg e ${fatter.altura}m de altura `;
