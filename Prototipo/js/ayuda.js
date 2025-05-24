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
