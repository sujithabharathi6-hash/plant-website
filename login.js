document.getElementById("loginBtn").addEventListener("click", () => {
  window.location.href = "login.html";
});
//////login.js (REDIRECT BACK)////
// function login() {
//   alert("Login successful!");
//   window.location.href = "index.html";
// }
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Correct credentials
  const correctEmail = "sujithabharathi6@gmail.com";
  const correctPassword = "01012002";

  if (email === correctEmail && password === correctPassword) {
    alert("Login Successful");

    // redirect
    window.location.href = "success.html";
  } else {
    alert("Username or password you have entered is incorrect");
  }
}