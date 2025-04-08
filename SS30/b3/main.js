const div = document.querySelector(".main");

const red = document.querySelector("#red");
const green = document.querySelector("#green");
const purple = document.querySelector("#purple");

red.addEventListener("click", ()=>{
    div.classList.remove("green", "purple");
    div.classList.add("red");
})
green.addEventListener("click", () => {
    div.classList.remove("red", "purple");
    div.classList.add("green");
});

purple.addEventListener("click", () => {
    div.classList.remove("red", "green");
    div.classList.add("purple");
});