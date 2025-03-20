function checkName(){
    let _name = prompt("Enter your Username")

    if( _name === "ADMIN"){
        checkPass();
    }

    if( _name = NULL){
        alert("CANCELLED");
    }else{
        alert("I DON'T KNOW");
    }
}

function checkPass() {
  let password = prompt("Enter your password:");

  if (password === "TheMaster") {
    alert("Welcome");
  } else if (password === null) {
    alert("Cancelled");
  } else {
    alert("Wrong password");
  }
}

checkName();