document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const rol = document.querySelector('input[name="rol"]:checked')?.value || 'vecino';

  let valid = true;

  if (!validateEmail(email)) {
    showError('emailError', 'Correo inválido.');
    valid = false;
  } else {
    clearError('emailError');
  }

  if (password.length < 6) {
    showError('passwordError', 'La contraseña debe tener al menos 6 caracteres.');
    valid = false;
  } else {
    clearError('passwordError');
  }

  if (rol === 'profesional' && !email.toLowerCase().endsWith('@conectaplus.cl')) {
    showError('emailError', 'El correo profesional debe terminar en @conectaplus.cl');
    valid = false;
  }

  if (valid) {
    const nombre = email.split('@')[0];
    localStorage.setItem(
      'usuarioConecta',
      JSON.stringify({
        nombre: capitalize(nombre),
        rol: rol,
      })
    );

    window.location.href = 'principal.html';
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

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const usuarioLogueado = {
  nombre: 'Nombre Real',
  correo: 'correo@ejemplo.com',
  tipoCuenta: 'Buen Vecino',
  ranking: 15,
  puntosCanje: 200,
  avatarUrl: 'image/avatar.png' // si tienes URL de avatar
};


