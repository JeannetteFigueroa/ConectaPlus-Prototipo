document.addEventListener('DOMContentLoaded', () => {
  // Setear mínimo de fecha a hoy
  const fechaInput = document.getElementById('fecha');
  const hoy = new Date().toISOString().split('T')[0];
  fechaInput.min = hoy;

  document.getElementById('formCita').addEventListener('submit', function(e) {
    e.preventDefault();

    const fecha = fechaInput.value;
    const psicologo = document.getElementById('psicologo').value;
    const hora = document.getElementById('hora').value;
    const modalidad = document.querySelector('input[name="modalidad"]:checked').value;

    let mensaje = '';
    if (!fecha || !psicologo || !hora || !modalidad) {
      mensaje = 'Por favor, completa todos los campos.';
      mostrarMensaje(mensaje, true);
      return;
    }

    // Simulación de agendamiento exitoso
    mensaje = `¡Cita agendada con ${psicologo} el ${fecha} a las ${hora} (${modalidad})!`;
    mostrarMensaje(mensaje, false);

    // Aquí podrías guardar en localStorage, enviar a backend, etc.
    setTimeout(() => {
      mostrarMensaje('', false);
      // window.location.href = "historial-medico.html"; // Si quieres redirigir después
    }, 3500);
  });

  function mostrarMensaje(msg, error) {
    const div = document.getElementById('mensaje');
    div.textContent = msg;
    div.style.color = error ? "#dc3545" : "#219150";
  }
});
