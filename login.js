document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorBox = document.getElementById('login-error');

  const user = JSON.parse(localStorage.getItem(email));

  if (!user || user.password !== password) {
    errorBox.textContent = 'Invalid credentials';
    return;
  }

  alert(`Welcome ${user.firstName}!`);
  errorBox.textContent = '';
});