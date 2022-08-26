var form = document.getElementById("myForm");

const resultElement = document.getElementById("result");

function handleForm(event) {
  event.preventDefault();
  const entrada1 = Number(document.getElementById("entrada1").value),
    entrada2 = Number(document.getElementById("entrada2").value);

  const operation = document.getElementById("option").value;

  console.log(entrada1);
  console.log(entrada2);
  console.log(operation);

  var resultado = 0;

  switch (operation) {
    case "+":
      console.log("soma");
      resultado = entrada1 + entrada2;
      break;
    case "-":
      console.log("subtracao");
      resultado = entrada1 - entrada2;
      break;
    case "/":
      console.log("divisao");
      resultado = entrada1 / entrada2;
      break;
    case "*":
      console.log("multiplicacao");
      resultado = entrada1 * entrada2;
      break;
  }

  console.log("resultado: " + resultado);

  resultElement.innerHTML = `Resultado: ${resultado} <br/> O resultado é um número ${
    resultado > 0 ? "positivo" : "negativo"
  } <br /> O resultado é um número ${resultado % 2 == 0 ? "par" : "ímpar"}`;
  resultElement.style.display = "block";
}

form.addEventListener("submit", handleForm);
