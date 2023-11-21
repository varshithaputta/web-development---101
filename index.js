function submitForm() {
  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var dob = document.getElementById("dob").value;
  var acceptTerms = document.getElementById("acceptTerms").checked;

  // Perform validation (you can add more validation logic here)

  // Display the submitted data (you can modify this part based on your needs)
  alert("Submitted Data:\nName: " + name + "\nEmail: " + email + "\nPassword: " + password + "\nDOB: " + dob + "\nAccept Terms: " + acceptTerms);
}

