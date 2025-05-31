document.getElementById('register-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('reg-email').value;
  const password = document.getElementById('reg-password').value;
  const errorBox = document.getElementById('register-error');

  if (localStorage.getItem(email)) {
    errorBox.textContent = 'User already exists';
    return;
  }

  localStorage.setItem(email, JSON.stringify({ firstName, lastName, password }));
  alert(`Welcome ${firstName}! Your account has been created.`);
  window.location.href = 'login.html';
});


