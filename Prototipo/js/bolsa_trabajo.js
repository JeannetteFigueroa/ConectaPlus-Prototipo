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
