document.addEventListener('DOMContentLoaded', () => {
  const nombreUsuario = document.getElementById('nombreUsuario');
  const correoUsuario = document.getElementById('correoUsuario');
  const tipoCuenta = document.getElementById('tipoCuenta');
  const rankingUsuario = document.getElementById('rankingUsuario');
  const puntosCanje = document.getElementById('puntosCanje');
  const avatarPerfil = document.getElementById('avatarPerfil');
  const avatarBtn = document.getElementById('avatarBtn');
  const accountDropdown = document.getElementById('accountDropdown');
  const accountBtn = document.getElementById('accountBtn');

  // Obtener datos del usuario desde localStorage
  const usuarioStr = localStorage.getItem('usuario');
  let usuario = null;

  if (usuarioStr) {
    try {
      usuario = JSON.parse(usuarioStr);
    } catch (error) {
      console.error('Error al parsear datos de usuario:', error);
    }
  }

  if (usuario) {
    nombreUsuario.textContent = usuario.nombre || 'Sin nombre';
    correoUsuario.textContent = usuario.correo || 'Sin correo';
    tipoCuenta.textContent = usuario.tipoCuenta || 'Sin tipo';
    rankingUsuario.textContent = usuario.ranking !== undefined ? `#${usuario.ranking}` : '-';
    puntosCanje.textContent = usuario.puntosCanje !== undefined ? usuario.puntosCanje : '0';

    // Cambiar avatar si existe URL
    if (usuario.avatarUrl) {
      avatarPerfil.src = usuario.avatarUrl;
      avatarBtn.src = usuario.avatarUrl;
    }
  } else {
    // No hay usuario, mostrar mensajes por defecto
    nombreUsuario.textContent = 'Invitado';
    correoUsuario.textContent = '';
    tipoCuenta.textContent = '';
    rankingUsuario.textContent = '-';
    puntosCanje.textContent = '0';
  }


  // Manejo menú cuenta
  accountBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = accountDropdown.hasAttribute('hidden');
    if (isHidden) {
      accountDropdown.removeAttribute('hidden');
      accountBtn.setAttribute('aria-expanded', 'true');
    } else {
      accountDropdown.setAttribute('hidden', '');
      accountBtn.setAttribute('aria-expanded', 'false');
    }
  });

  accountDropdown.addEventListener('click', (e) => e.stopPropagation());

  document.addEventListener('click', () => {
    accountDropdown.setAttribute('hidden', '');
    accountBtn.setAttribute('aria-expanded', 'false');
  });
});



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