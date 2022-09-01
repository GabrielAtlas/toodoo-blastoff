const searchField = document.getElementById("search-field");

const liList = document.getElementsByTagName("li");

var search = "";

setInterval(() => {
  if (searchField.value !== search) {
    search = searchField.value;
    if (search.length === 0) {
      return;
    }
    for (var i = 0; i < liList.length; i++) {
      var text = liList[i].innerHTML;
      if (text.includes(search)) {
        liList[i].innerHTML = `<b>${text}</b>`;
      }
    }
  }
}, 1000);

function strip(html) {
  html = html.replace(/<b>/g, "");
  html = html.replace(/<\/b>/g, "");
  return html;
}
