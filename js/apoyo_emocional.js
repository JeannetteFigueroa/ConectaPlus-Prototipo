document.addEventListener('DOMContentLoaded', () => {
  const usuario = JSON.parse(localStorage.getItem('usuarioConecta')) || { nombre: "Usuario" };
  const welcomeUser = document.getElementById('welcomeUser');
  welcomeUser.textContent = `${usuario.nombre}, te damos la bienvenida.`;
});

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

// Función para cambiar tamaño de fuente (puede estar fuera del DOMContentLoaded)
function cambiarFuente(opcion) {
  const html = document.documentElement;
  let size = parseInt(html.style.fontSize) || 16;
  if(opcion === 1) size += 2;
  else if(opcion === -1) size -= 2;
  else size = 16;
  html.style.fontSize = size + "px";
}

const video = document.getElementById('miVideo');
  video.volume = 2.0; // volumen máximo

const video = document.getElementById('miVideo');
  const volumenControl = document.getElementById('volumenControl');

  volumenControl.addEventListener('input', () => {
    video.volume = volumenControl.value;
  });