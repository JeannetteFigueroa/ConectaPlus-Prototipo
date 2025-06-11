document.addEventListener('DOMContentLoaded', () => {
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');

  sidebarToggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    sidebarToggle.setAttribute('aria-expanded', isOpen);
  });

  // Cerrar menú si se hace clic fuera del sidebar en móvil
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
      sidebar.classList.remove('open');
      sidebarToggle.setAttribute('aria-expanded', false);
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const serviceCards = document.querySelectorAll('.service-card');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();

    serviceCards.forEach(card => {
      const keywords = card.getAttribute('data-keywords');
      const title = card.querySelector('h3').textContent.toLowerCase();
      const content = card.textContent.toLowerCase();

      // Se filtra si el texto ingresado está en el título, keywords o contenido del artículo
      const matches =
        keywords.includes(query) ||
        title.includes(query) ||
        content.includes(query);

      card.style.display = matches ? 'block' : 'none';
    });
  });
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
