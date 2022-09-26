/*
Construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
      Para homens: (72.7*h) - 58
      Para mulheres: (62.1*h) - 44.7
        Ao concluir, faça o upload no seu repositório do GitHub.
*/

var form = document.getElementById("myForm");

const resultElement = document.getElementById("result");

function handleForm(event) {
  event.preventDefault();
  const entrada1 = document.getElementById("entrada1").value;

  const sexo = document.getElementById("sexo").value;

  console.log(sexo);

  const pesoIdeal =
    sexo === "M" ? 72.7 * entrada1 - 58 : 62.1 * entrada1 - 44.7;

  console.log(pesoIdeal);

  resultElement.innerHTML = `Seu peso ideal é de: ${pesoIdeal.toFixed(2)}`;
  resultElement.style.display = "block";
}

form.addEventListener("submit", handleForm);
