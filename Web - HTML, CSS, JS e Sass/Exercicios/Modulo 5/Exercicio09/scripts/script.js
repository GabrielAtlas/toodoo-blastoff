const stringDate = prompt("Digite a data");

try {
  const [day, monthNumber, year] = stringDate.split("/");

  const month = new Date(
    parseInt(year),
    parseInt(monthNumber) - 1,
    parseInt(day)
  ).toLocaleString("default", { month: "long" });

  document.getElementById("result").innerHTML = `${day} de ${month} de ${year}`;
} catch (err) {}
