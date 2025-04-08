const modal = document.querySelector("#myModal");
const btn = document.querySelector("#open");
const span = document.querySelector(".close");

btn.onclick = () =>{
    modal.style.display = "block";
}

span.onclick = () => {
    modal.style.display = "none"
}