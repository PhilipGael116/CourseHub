const form = document.getElementById('form');
const firstNameInput = document.getElementById('firstName-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const repeatPasswordInput = document.getElementById('repeatPassword-input');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  let errors = [];

  errors = validateFormInputs(
    firstNameInput.value,
    emailInput.value,
    passwordInput.value,
    repeatPasswordInput.value
  );

  if (errors.length > 0) {
    e.preventDefault();
    errorMessage.innerText = errors.join(". ");
  }

  if (errors.length === 0) {
    alert('Registration Successful!');
    window.location.href = '../index.html';
}
});

function validateFormInputs(firstName, email, password, repeatPassword) {
  const errors = [];

  if (!firstName.trim()) errors.push("First name is required");
  if (!email.trim()) {
    errors.push("Email is required");
  } else if (!validateEmail(email)) {
    errors.push("Invalid email format");
  }
  if (!password) errors.push("Password is required");
  if (password !== repeatPassword) errors.push("Passwords do not match");

  return errors;
}

// Validate Email Format
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
