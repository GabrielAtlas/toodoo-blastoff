var form = document.getElementById("myForm");

const resultElement = document.getElementById("result");

function handleForm(event) {
  event.preventDefault();
  const entrada1 = Number(document.getElementById("entrada1").value),
    entrada2 = Number(document.getElementById("entrada2").value);

  const media = (entrada1 + entrada2) / 2;

  const conceito = getConceito(media);

  var aprovado = conceito == "A" || conceito == "B" || conceito == "C";

  resultElement.innerHTML = `P1: ${entrada1} <br/> P2: ${entrada2} <br /> Média: ${media} <br /> Conceito: ${conceito} <br /> Status: ${
    aprovado ? "Aprovado" : "Reprovado"
  }`;
  resultElement.style.display = "block";
}

function getConceito(media) {
  if (media > 9.0) return "A";
  if (media > 7.5 && media <= 9) return "B";
  if (media > 6.0 && media <= 7.5) return "C";
  if (media > 4.0 && media <= 6.0) return "D";

  return "E";
}

form.addEventListener("submit", handleForm);
