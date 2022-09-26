const loadingBar = document.getElementById("progress-bar");
const loadingContainer = document.getElementById("loading-container");
const loadedContent = document.getElementsByTagName("section")[0];
const headerContent = document.getElementsByTagName("header")[0];

let progress = 0;

var intervalId = setInterval(() => {
  loadingBar.textContent = `${progress}%`;
  if (progress >= 100) {
    setTimeout(() => {
      loadingContainer.style.opacity = "0";

      setTimeout(() => {
        loadingContainer.remove(); // removing element from DOM
        loadedContent.style.display = "block";
        console.log(headerContent);
        headerContent.style.display = "flex";
      }, 300);
    }, 1200);
    clearInterval(intervalId);
  }
  loadingBar.style.width = `${progress}%`;
  progress += 25;
}, 300);

$("#collapseDiv").on("hidden.bs.collapse", function () {
  // do something…
  console.log("ABBB");
});
