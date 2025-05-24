document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const email = document.getElementById('email').value.trim();
  const fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const rol = document.querySelector('input[name="rol"]:checked')?.value || 'vecino';

  let valid = true;
  let errorMsg = '';

  if (nombre.length < 2) {
    errorMsg += 'Ingresa tu nombre.<br>';
    valid = false;
  }
  if (apellido.length < 2) {
    errorMsg += 'Ingresa tu apellido.<br>';
    valid = false;
  }
  if (!validateEmail(email)) {
    errorMsg += 'Correo inválido.<br>';
    valid = false;
  }
  if (!fechaNacimiento) {
    errorMsg += 'Ingresa tu fecha de nacimiento.<br>';
    valid = false;
  }
  if (password.length < 6) {
    errorMsg += 'La contraseña debe tener al menos 6 caracteres.<br>';
    valid = false;
  }
  if (password !== confirmPassword) {
    errorMsg += 'Las contraseñas no coinciden.<br>';
    valid = false;
  }
  if (rol === 'profesional' && !email.toLowerCase().endsWith('@conectapuls.cl')) {
    errorMsg += 'El correo profesional debe terminar en @conectapuls.cl.<br>';
    valid = false;
  }

  document.getElementById('registerError').innerHTML = errorMsg;

  if (valid) {
    localStorage.setItem(
      'usuarioConecta',
      JSON.stringify({
        nombre: capitalize(nombre) + ' ' + capitalize(apellido),
        email: email,
        fechaNacimiento: fechaNacimiento,
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

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
