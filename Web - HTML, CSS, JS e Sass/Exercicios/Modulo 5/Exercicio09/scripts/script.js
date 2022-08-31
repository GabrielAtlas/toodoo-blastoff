const stringDate = prompt("Digite a data");

/*
TENTEI UTILIZAR REGEX E NÃO CONSEGUI.

const pattern = new RegExp(
  "/^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]d{4}$/"
);

console.log(pattern.test(stringDate));

*/

//console.log(validateDate(stringDate));

try {
  //if (!validateDate(stringDate)) throw new Exception("Invalid date");

  const [day, monthNumber, year] = stringDate.split("/");

  const month = new Date(
    parseInt(year),
    parseInt(monthNumber) - 1,
    parseInt(day)
  ).toLocaleString("default", { month: "long" });

  console.log(month);

  document.getElementById("result").innerHTML = `${day} de ${month} de ${year}`;
} catch (err) {
  document.getElementById("result").innerHTML = "null";
}
