document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorDiv = document.getElementById('registerError');
  
    errorDiv.textContent = '';
    let valid = true;
  
    // Validar nombre y apellido
    if (nombre === '' || apellido === '') {
      errorDiv.textContent = 'Debes ingresar tu nombre y apellido.';
      valid = false;
    }
  
    // Validar email
    if (!validateEmail(email)) {
      errorDiv.textContent = 'Correo electrónico inválido.';
      valid = false;
    }
  
    // Validar fecha de nacimiento
    if (!fechaNacimiento) {
      errorDiv.textContent = 'Debes ingresar tu fecha de nacimiento.';
      valid = false;
    }
  
    // Validar contraseña
    if (password.length < 6) {
      errorDiv.textContent = 'La contraseña debe tener al menos 6 caracteres.';
      valid = false;
    }
  
    // Validar confirmación de contraseña
    if (password !== confirmPassword) {
      errorDiv.textContent = 'Las contraseñas no coinciden.';
      valid = false;
    }
  
    if (valid) {
      // Aquí puedes agregar lógica para guardar el usuario o redirigir
      alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
      window.location.href = 'index.html';
    }
  });
  
  function validateEmail(email) {
    const re = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }
  