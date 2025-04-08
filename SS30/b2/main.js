const btn = document.querySelector(".toggle");

btn.addEventListener("click", () => {
    document.querySelector("#demo").classList.toggle("mode");
});