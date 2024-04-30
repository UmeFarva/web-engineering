function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    return isLoggedIn === "true";
  }
  
  
  function login(username, password) {
  
    if (username === "admin" && password === "password") {
      localStorage.setItem("isLoggedIn", "true");
      updateLoginStatus(true);
      console.log("Login successful!");
    } else {
      console.log("Invalid credentials. Please try again.");
    }
  }
  
  function logout() {
    localStorage.setItem("isLoggedIn", "false");
    updateLoginStatus(false);
    console.log("Logged out successfully!");
  }
  function updateLoginStatus(isLoggedIn) {
    const loginStatusElement = document.getElementById("loginStatus");
    const logoutButton = document.getElementById("logoutBtn");
  
    if (isLoggedIn) {
      loginStatusElement.textContent = "User is logged in.";
      logoutButton.style.display = "block";
    } else {
      loginStatusElement.textContent = "User is not logged in.";
      logoutButton.style.display = "none";
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    if (checkLoginStatus()) {
      updateLoginStatus(true);
      console.log("User is logged in.");
    } else {
      updateLoginStatus(false);
      console.log("User is not logged in.");
    }
  });
  
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    login(username, password);
  });
  
  const logoutButton = document.getElementById("logoutBtn");
  logoutButton.addEventListener("click", function () {
    logout();
  });