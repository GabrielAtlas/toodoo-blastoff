/*
Tamanho de strings. Faça um programa que leia 2 strings e informe o conteúdo delas seguido do seu comprimento.
 Informe também se as duas strings possuem o mesmo comprimento e são iguais ou diferentes no conteúdo.
Exemplo:

Entrada:
    Brasil Hexa 2006
    Brasil! Hexa 2006!

Saída:
    Tamanho de "Brasil Hexa 2006": 16 caracteres
    Tamanho de "Brasil! Hexa 2006!": 18 caracteres
    As duas strings são de tamanhos diferentes.
    As duas strings possuem conteúdo diferente.
*/
var form = document.getElementById("myForm");

function handleForm(event) {
  event.preventDefault();
  const entrada1 = document.getElementById("entrada1").value,
    entrada2 = document.getElementById("entrada2").value;

  console.log(`Tamanho de "${entrada1}": ${entrada1.length} caracteres`);
  console.log(`Tamanho de "${entrada2}": ${entrada2.length} caracteres`);

  if (entrada1.length != entrada2.length) {
    console.log("As duas strings são de tamanhos diferentes.");
  } else {
    console.log("As duas strings tem tamanhos iguais.");
  }

  if (entrada1 === entrada2) {
    console.log("O conteúdo das duas strings é idêntico.");
  } else {
    console.log("As duas strings possuem conteúdo diferente.");
  }
}

form.addEventListener("submit", handleForm);
