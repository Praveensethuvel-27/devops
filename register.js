function registerUser(event) {
  event.preventDefault();

  let name = document.getElementById("regName").value;
  let email = document.getElementById("regEmail").value;
  let password = document.getElementById("regPassword").value;

  if (name && email && password) {
    alert("Registration successful for " + name);
    window.location.href = "login.html"; // redirect to login after registration
  } else {
    alert("Please fill all fields");
  }
}
