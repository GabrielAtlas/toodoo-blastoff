/*

try {
  const [day, monthNumber, year] = stringDate.split("/");

  const month = new Date(
    parseInt(year),
    parseInt(monthNumber) - 1,
    parseInt(day)
  ).toLocaleString("default", { month: "long" });

  document.getElementById("result").innerHTML = `${day} de ${month} de ${year}`;
} catch (err) {}
*/

var temperatures = [];
var monthNames = [];

for (var i = 0; i < 12; i++) {
  const month = new Date(2022, i, 01).toLocaleString("default", {
    month: "long",
  });
  const temperature = prompt(`Digite a temperatura do mês de ${month}`);
  temperatures[i] = parseFloat(temperature);
  monthNames[i] = month;
}

var temperaturaMedia =
  temperatures.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  ) / 12;

var result = `Temperatura média anual: ${temperaturaMedia} <br/> Meses que passaram da temperatura média: <br/>`;

for (var i = 0; i < 12; i++) {
  if (temperatures[i] > temperaturaMedia) {
    result = result + `${monthNames[i]} - ${temperatures[i]}°C <br/>`;
  }
}

document.getElementById("result").innerHTML = result;
