const textElement = document.getElementById("text");
const hideButton = document.getElementById("hideBtn");
const showButton = document.getElementById("showBtn");

hideButton.addEventListener("click", function () {
  textElement.style.display = "none";
});

showButton.addEventListener("click", function () {
  textElement.style.display = "block";
});
