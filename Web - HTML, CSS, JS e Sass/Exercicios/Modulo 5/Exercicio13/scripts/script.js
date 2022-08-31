let retangulo = {
  base: 30,
  altura: 50,
  setBase: function (novaMedida) {
    this.base = novaMedida;
  },
  setAltura: function (novaMedida) {
    this.altura = novaMedida;
  },
  getBase: function () {
    return this.base;
  },
  getAltura: function () {
    return this.altura;
  },
  calcularArea: function () {
    return this.base * this.altura;
  },
  calcularPerimetro: function () {
    return 2 * (this.base + this.altura);
  },
};

document.getElementById(
  "result"
).innerHTML = `Base: ${retangulo.getBase()} <br /> 
 Altura: ${retangulo.getAltura()} <br /> 
 Area: ${retangulo.calcularArea()} <br />
Permietro: ${retangulo.calcularPerimetro()}`;
