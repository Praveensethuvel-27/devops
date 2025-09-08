function loginUser(event) {
  event.preventDefault();

  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  // Example validation
  if (email === "test@example.com" && password === "1234") {
    alert("Login successful!");
    window.location.href = "welcome.html"; // redirect page
  } else {
    alert("Invalid email or password");
  }
}
