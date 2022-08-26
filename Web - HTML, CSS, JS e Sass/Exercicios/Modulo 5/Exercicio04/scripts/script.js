var form = document.getElementById("myForm");

const resultElement = document.getElementById("result");

function handleForm(event) {
  event.preventDefault();
  const entrada1 = document.getElementById("entrada1").value;

  var excesso = 0;
  if (entrada1 > 50) excesso = entrada1 - 50;

  resultElement.innerHTML = `Kilos excedidos: ${excesso.toFixed(
    2
  )}kg <br/> Total de taxa: R$${(excesso * 4).toFixed(2)}`;
  resultElement.style.display = "block";
}

form.addEventListener("submit", handleForm);
