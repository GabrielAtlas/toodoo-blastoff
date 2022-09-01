const resultElement = document.getElementById("result");

document.addEventListener("keydown", function (event) {
  var key = event.key;
  if (typeof key !== "string") {
    return;
  }

  const num = Number(key);
  if (Number.isInteger(num) && num > 0) {
    var result = "";
    for (var i = 0; i <= 9; i++) {
      result += `${i}x${num}=${i * num}<br/>`;
    }
    resultElement.innerHTML = result;
  }
});
