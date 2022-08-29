var form = document.getElementById("myForm");

const resultElement = document.getElementById("result");

const pessoasDiv = document.getElementById("ages");

function handleForm(event) {
  event.preventDefault();
  const numeroDePessoas = Number(document.getElementById("entrada1").value);

  if (document.body.contains(document.getElementById("pessoa-0"))) {
    var media = 0;
    for (var i = 0; i < numeroDePessoas; i++) {
      media += Number(document.getElementById("pessoa-" + i).value);
    }
    media = media / numeroDePessoas;
    resultElement.innerHTML = `A media de idade dos alunos é de ${media.toFixed(
      1
    )}, portanto a turma é ${getTurmaType(media)}.`;
    return;
  }

  var elementString = "";
  for (var i = 0; i < numeroDePessoas; i++) {
    elementString += `<br/> <input
        type='number'
        style='width: 200px'
        min='1'
        id='pessoa-${i}'
        placeholder='Digite a idade da pessoa #${i}' />`;
  }

  pessoasDiv.innerHTML = elementString;

  resultElement.innerHTML = "Preencha todos os campos";

  resultElement.style.display = "block";
}

function getTurmaType(media) {
  if (media < 25) return "JOVEM";
  if (media >= 25 && media < 60) return "ADULTA";
  return "IDOSA";
}

form.addEventListener("submit", handleForm);
