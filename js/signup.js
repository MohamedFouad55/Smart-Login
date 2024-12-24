let signupName = document.querySelector("#signupName");
let signupEmail = document.getElementById("signupEmail");
let signupPassword = document.querySelector("#signupPassword");
let signupBtn = document.querySelector("#signupBtn");
let loginAnchor = document.querySelector("#loginAnchor");
let msg = document.querySelector("#msg");
let success = document.querySelector("#success");
let existMsg = document.querySelector("#existMsg");
let users = [];
if (localStorage.getItem("users")) {
  users = JSON.parse(localStorage.getItem("users"));
}
function signUp() {
  let user = {
    name: signupName.value,
    email: signupEmail.value,
    password: signupPassword.value,
  };
  if (
    signupName.value === "" ||
    signupEmail.value === "" ||
    signupPassword.value === ""
  ) {
    msg.innerHTML = 'All inputs is required';
    success.innerHTML = '';
    existMsg.innerHTML = '';
    return;
  }
  else if (
    isValidEmail(signupEmail.value) &&
    isNewEmail(signupEmail.value)
  ) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    clearForm();
    console.log(users);
    success.innerHTML = 'Success';
    existMsg.innerHTML = '';
    msg.innerHTML = '';
    return;
  }
  else if (true) {
    for (var i = 0; i < users.length; i++) {
      if (users[i].email == user.email) {
        existMsg.innerHTML = 'email already exists';
        msg.innerHTML = '';
        success.innerHTML = '';
      }
    }
  };
}
signupBtn.addEventListener("click", function () {
  signUp();
});
function isValidEmail(email) {
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
function isNewEmail(email) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return false;
    }
  }
  return true;
}
function clearForm() {
  signupName.value = "";
  signupEmail.value = "";
  signupPassword.value = "";
}
loginAnchor.addEventListener("click", function () {
  window.location.href = "index.html";
});