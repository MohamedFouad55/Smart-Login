let logOutBtn = document.querySelector("#logOutBtn");
let welcomeUser = document.querySelector("#userName");
let userName = localStorage.getItem("userName");
welcomeUser.innerHTML = "Welcome " + userName;
logOutBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
