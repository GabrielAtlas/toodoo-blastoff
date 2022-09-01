function exibir(num) {
  console.log("A operação resultou em: " + num);
}

function soma(a, b, callback) {
  var result = a + b;
  callback(result);
}

soma(2, 3, exibir);

function multiplicacao(a, b, cb) {
  var result = a * b;
  cb(result);
}

multiplicacao(2, 4, exibir);
