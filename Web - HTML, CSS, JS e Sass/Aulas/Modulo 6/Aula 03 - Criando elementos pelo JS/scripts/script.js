const body = document.querySelector("body");

var newElement = document.createElement("p");

newElement.appendChild(
  document.createTextNode("Olá, eu sou um parágrafo com conteúdo.")
);

body.appendChild(newElement);
