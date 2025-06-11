document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formAyuda');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();

    if (!nombre || !email || !mensaje) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Construir mailto con asunto y cuerpo
    const subject = encodeURIComponent(`Comentario desde Conecta+ de ${nombre}`);
    const body = encodeURIComponent(`Nombre: ${nombre}\nCorreo: ${email}\n\nComentario:\n${mensaje}`);

    // Abrir cliente de correo con mailto
    window.location.href = `mailto:jea.figueroa@duocuc.cl?subject=${subject}&body=${body}`;

    // Opcional: resetear formulario
    form.reset();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
      navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic fuera (solo móvil)
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', false);
      }
    });

    // Cerrar menú al hacer clic en un enlace (opcional, recomendado)
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', false);
      });
    });
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
