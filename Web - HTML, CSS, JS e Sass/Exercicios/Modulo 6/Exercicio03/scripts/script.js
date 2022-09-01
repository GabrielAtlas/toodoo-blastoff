const form = document.getElementById("myForm");

const resultElement = document.getElementById("result");

function calcularFatorial(event) {
  event.preventDefault();
  var fatNumber = Number(document.getElementById("fat-number").value);

  var result = factorialize(fatNumber);

  resultElement.innerHTML = `Resultado do fatorial: ${result}`;
  resultElement.style.display = "block";
}

function factorialize(fatorial) {
  if (isNaN(fatorial)) {
    return "Não existe fatorial de um texto";
  }

  if (!Number.isInteger(fatorial) || fatorial < 0) {
    return "Não existe fatorial de um número não natural";
  }

  if (fatorial === 0 || fatorial === 1) {
    return 1;
  }

  var resultado = fatorial;
  var primeiroMultipicador = fatorial - 1;
  for (var i = primeiroMultipicador; i > 1; i--) {
    resultado *= i;
  }

  return resultado;
}

form.addEventListener("submit", calcularFatorial);
