document.getElementById('resetForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  let valid = true;

  if (!validateEmail(email)) {
    showError('emailError', 'Por favor, ingresa un correo válido.');
    valid = false;
  } else {
    clearError('emailError');
  }

  if (valid) {
    alert('Si el correo está registrado, recibirás un enlace para restablecer tu contraseña.');
    // Aquí podrías redirigir o limpiar el formulario:
    // window.location.href = 'index.html';
    this.reset();
  }
});

function validateEmail(email) {
  const re = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearError(id) {
  document.getElementById(id).textContent = '';
}
