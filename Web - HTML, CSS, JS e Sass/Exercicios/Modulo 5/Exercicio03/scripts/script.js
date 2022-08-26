var form = document.getElementById("myForm");

function handleForm(event) {
  event.preventDefault();
  const stringObject = document.getElementById("entradajson").value;

  try {
    const json = JSON.parse(stringObject);
    json.endereco = "R. Hum, 72 - Família Andrade, Santa Rita do Sapucaí";
    console.log("Objeto com endereço:");
    console.log(json);
  } catch (err) {
    console.log("Objeto no formato incorreto");
  }
}

form.addEventListener("submit", handleForm);
