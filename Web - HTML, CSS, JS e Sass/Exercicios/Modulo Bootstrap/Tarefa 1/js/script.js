const loadingBar = document.getElementById("progress-bar");
const loadingContainer = document.getElementById("loading-container");

let progress = 0;

var intervalId = setInterval(() => {
  loadingBar.textContent = `${progress}%`;
  if (progress >= 100) {
    // FINISHED LOADING
    setTimeout(() => {
      loadingContainer.style.opacity = "0";

      setTimeout(() => {
        loadingContainer.remove(); // removing element from DOM
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
