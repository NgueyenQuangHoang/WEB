let form = document.querySelector(".myForm");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const userName = document.querySelector("#exampleInputName").value;
    const password = document.querySelector("#exampleInputPassword").value;

    if (userName === "huanrose@gmail.com" && password === "123456") {
        alert("login oke");
    } else {
        alert("login not oke");
    }
});