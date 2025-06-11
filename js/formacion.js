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
  const btnFiltros = document.querySelector('.btn-filtros');
  const inputBusqueda = document.querySelector('.search-box input');
  const tipoSelect = document.getElementById('tipoPrograma');
  const modalidadSelect = document.getElementById('modalidad');
  const areaSelect = document.getElementById('area');
  const programas = document.querySelectorAll('.program-card');

  function filtrarProgramas() {
    const texto = inputBusqueda.value.toLowerCase();
    const tipo = tipoSelect.value;
    const modalidad = modalidadSelect.value;
    const area = areaSelect.value;

    programas.forEach(programa => {
      const titulo = programa.querySelector('h2').textContent.toLowerCase();
      const tipoPrograma = programa.querySelector('.program-type').textContent.toLowerCase();
      const meta = programa.querySelector('.program-meta').textContent.toLowerCase();

      // Filtrar por texto, tipo, modalidad y área
      const coincideTexto = titulo.includes(texto);
      const coincideTipo = tipo === '' || tipoPrograma.includes(tipo);
      const coincideModalidad = modalidad === '' || meta.includes(modalidad);
      const coincideArea = area === '' || titulo.includes(area); // Puedes ajustar según datos

      if (coincideTexto && coincideTipo && coincideModalidad && coincideArea) {
        programa.style.display = '';
      } else {
        programa.style.display = 'none';
      }
    });
  }

  btnFiltros.addEventListener('click', filtrarProgramas);
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

function verDetalle(id) {
  window.location.href = 'detalle_curso.html?id=' + encodeURIComponent(id);
}