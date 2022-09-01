const searchField = document.getElementById("search-field");

const liList = document.getElementsByTagName("li");

var search = "";

setInterval(() => {
  if (searchField.value !== search) {
    search = searchField.value;
    for (var i = 0; i < liList.length; i++) {
      console.log(liList[i]);
    }
  }
}, 1000);
