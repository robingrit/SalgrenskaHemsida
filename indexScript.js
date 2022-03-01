const loginbtn = document.getElementById("loginBtn");
const input = document.querySelectorAll("input");

loginbtn.addEventListener("click", CheckCredentials);

function CheckCredentials() {
  let inputUserName = input[0].value;
  let inputUserPass = input[1].value;
  console.log(inputUserName);
  console.log(inputUserPass);

  if (inputUserName == "admin" && inputUserPass == "password") {
    console.log("it works");

    window.location.href = "inloggad.html";
  } else {
    console.log("it dosent");
    window.alert("Wrong password try again");
  }
}
