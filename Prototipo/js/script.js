document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const userType = document.getElementById('userType').value;
  
    let valid = true;
  
    // Validar correo
    if (!validateEmail(email)) {
      showError('emailError', 'Correo inválido.');
      valid = false;
    } else {
      clearError('emailError');
    }
  
    // Validar contraseña
    if (password.length < 6) {
      showError('passwordError', 'La contraseña debe tener al menos 6 caracteres.');
      valid = false;
    } else {
      clearError('passwordError');
    }
  
    // Si todo es válido, simular inicio de sesión
    if (valid) {
      alert(`Bienvenido ${userType === 'admin' ? 'Profesional' : 'Vecino'}!\nRedirigiendo al inicio...`);
      // Aquí se puede redirigir a otra página con window.location.href
      // window.location.href = 'inicio.html';
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
  