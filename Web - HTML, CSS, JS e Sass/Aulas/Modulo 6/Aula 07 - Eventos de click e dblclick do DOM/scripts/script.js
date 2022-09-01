var title = document.querySelector("h1");

title.addEventListener("click", function (event) {
  title.innerHTML = "Hello";
  setTimeout(() => {
    title.innerHTML = "Clique em mim";
  }, 1000);
});

title.addEventListener("dblclick", function (event) {
  title.innerHTML = "KKLKKKKKKK EASTER EGG";
  setTimeout(() => {
    title.innerHTML = "Clique em mim";
  }, 1000);
});
