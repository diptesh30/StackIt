
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const password = form.querySelector("input[type='password']").value;
    const confirmPassword = form.querySelectorAll("input[type='password']")[1].value;

    // Password regex pattern
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    // Validate strength
    if (!passwordPattern.test(password)) {
      alert("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.");
      return;
    }

    // Validate match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Success
    alert("Registration successful!");
    // You can proceed with form.submit() or backend integration here.
  });
});

