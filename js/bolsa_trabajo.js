document.addEventListener('DOMContentLoaded', () => {
  const accountBtn = document.getElementById('accountBtn');
  const accountDropdown = document.getElementById('accountDropdown');

  // Mostrar/ocultar menú al hacer clic en el botón
  accountBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el clic se propague y cierre el menú inmediatamente
    const isHidden = accountDropdown.hasAttribute('hidden');
    if (isHidden) {
      accountDropdown.removeAttribute('hidden');
    } else {
      accountDropdown.setAttribute('hidden', '');
    }
  });

  // Evitar que clics dentro del dropdown cierren el menú
  accountDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Cerrar el menú si se hace clic fuera del botón y del dropdown
  document.addEventListener('click', () => {
    accountDropdown.setAttribute('hidden', '');
  });

  // Opcional: cerrar menú al seleccionar una opción (si quieres)
  accountDropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      accountDropdown.setAttribute('hidden', '');
    });
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

  // Función para cambiar tamaño de fuente (puede estar fuera del DOMContentLoaded)
function cambiarFuente(opcion) {
  const html = document.documentElement;
  let size = parseInt(html.style.fontSize) || 16;
  if(opcion === 1) size += 2;
  else if(opcion === -1) size -= 2;
  else size = 16;
  html.style.fontSize = size + "px";
}
