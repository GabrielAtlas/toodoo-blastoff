let bombaCombustivel = {
  tipoCombustivel: "Gasolina",
  valorLitro: 5.5,
  quantidadeCombustivel: 1, // por litros
  quantidadeDisponivel: 20.0, // quantidade de combustível da bomba
  abastecerPorValor: function (valor) {
    const abastecido = (valor / this.valorLitro) * this.quantidadeCombustivel;

    if (this.quantidadeDisponivel < abastecido) {
      console.log("A bomba não tem combustivel suficiente.");
      return;
    }

    this.quantidadeDisponivel -= abastecido;

    console.log(
      `Foi abastecido ${abastecido.toFixed(
        2
      )}L de combustível em seu veículo por R$${valor.toFixed(2)}.`
    );
  },

  abastecerPorLitro: function (litros) {
    if (this.quantidadeDisponivel < litros) {
      console.log("A bomba não tem combustivel suficiente.");
      return;
    }

    this.quantidadeDisponivel -= litros;

    const valor = (litros / this.quantidadeCombustivel) * this.valorLitro;

    console.log(
      `Foi abastecido ${litros.toFixed(
        2
      )}L de combustível em seu veículo por R$${valor.toFixed(2)}.`
    );
  },
  alterarValor: function (novoValor) {
    this.valorLitro = novoValor;
  },
  alterarCombustivel: function (novoTipo) {
    this.tipoCombustivel = novoTipo;
  },
  alterarQuantidadeCombustivel: function (novaQuantidade) {
    this.quantidadeCombustivel = novaQuantidade;
  },
};

bombaCombustivel.abastecerPorLitro(-30);
