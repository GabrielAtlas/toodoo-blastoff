const pattern = new RegExp(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/);

while (true) {
  var cpf = prompt("Digite o CPF para ser validado.");
  if (pattern.test(cpf)) {
    alert("Este CPF é VÁLIDO.");
  } else {
    alert("Este CPF é INVÁLIDO.");
  }
}
