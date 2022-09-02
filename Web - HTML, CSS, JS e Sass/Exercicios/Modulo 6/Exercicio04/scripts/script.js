const form = document.getElementById("myForm");

const resultElement = document.getElementById("result");

function calcularMultiplos(event) {
  event.preventDefault();
  var minimo = document.getElementById("minimo").value,
    maximo = document.getElementById("maximo").value;

  console.log(minimo, maximo);

  if (maximo < minimo) {
    resultElement.innerHTML = `O valor máximo tem que ser maior que o valor minimo.`;
    resultElement.style.display = "block";
    return;
  }

  var result = [];

  for (var i = minimo; i <= maximo; i++) {
    if (i % 2 == 0 && i % 3 == 0) result.push(i);
  }

  console.log(result);

  var resultStringfied = result.join();

  resultElement.innerHTML = `Números múltiplos de 2 e 3: ${resultStringfied}`;
  resultElement.style.display = "block";
}

form.addEventListener("submit", calcularMultiplos);
