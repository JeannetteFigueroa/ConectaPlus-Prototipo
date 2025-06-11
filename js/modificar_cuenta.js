// Menú hamburguesa
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
  });

  // Cerrar menú al hacer clic en enlace (móvil)
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Cerrar menú al redimensionar a escritorio
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // Menú de cuenta tipo GitHub
  const accountBtn = document.getElementById('accountBtn');
  const accountMenu = document.getElementById('accountMenu');
  accountBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    accountMenu.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!accountMenu.contains(e.target)) {
      accountMenu.classList.remove('open');
    }
  });

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('modificarCuentaForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const passwordActual = form.passwordActual.value.trim();
    const passwordNueva = form.passwordNueva.value.trim();
    const passwordConfirmar = form.passwordConfirmar.value.trim();

    if (!nombre || !email || !passwordActual) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    if (passwordNueva || passwordConfirmar) {
      if (passwordNueva.length < 8) {
        alert('La nueva contraseña debe tener al menos 8 caracteres.');
        return;
      }
      if (passwordNueva !== passwordConfirmar) {
        alert('La nueva contraseña y la confirmación no coinciden.');
        return;
      }
    }

    // Aquí puedes agregar la lógica para enviar los datos al servidor, por ejemplo con fetch

    alert('Cambios guardados correctamente.');
    form.reset();
  });
});
