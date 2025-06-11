document.addEventListener('DOMContentLoaded', function () {
  // ========== FECHA MÍNIMA ==========
  const fechaInput = document.getElementById('fecha');
  const hoy = new Date().toISOString().split('T')[0];
  fechaInput.setAttribute('min', hoy);

  // ========== FORMULARIO ==========
  const form = document.getElementById('formCita');
  const mensajeDiv = document.getElementById('mensaje');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const profesional = document.getElementById('psicologo').value;
    const modalidad = document.querySelector('input[name="modalidad"]:checked').value;

    if (!fecha || !hora || !profesional || !modalidad) {
      mostrarMensaje('Por favor, completa todos los campos.', 'error');
      return;
    }

    mostrarMensaje(`Cita agendada con ${profesional} el ${fecha} a las ${hora} (${modalidad}).`, 'success');
    form.reset();
    fechaInput.setAttribute('min', hoy); // Reestablecer fecha mínima después de reset
  });

  function mostrarMensaje(texto, tipo) {
    mensajeDiv.textContent = texto;
    mensajeDiv.className = 'mensaje ' + tipo;
    setTimeout(() => mensajeDiv.textContent = '', 5000);
  }

  // ========== FILTRO DE PROFESIONALES ==========
  const tipoProfesional = document.getElementById('tipoProfesional');
  const edad = document.getElementById('edad');
  const selectProfesional = document.getElementById('psicologo');

  const profesionales = [
    { nombre: 'Laura G.', tipo: 'psicologo', edad: 'adulto' },
    { nombre: 'Mario R.', tipo: 'psicologo', edad: 'adolescente' },
    { nombre: 'Sofía M.', tipo: 'psicologo', edad: 'infantil' },
    { nombre: 'Carlos T.', tipo: 'terapeuta', edad: 'adulto' },
    { nombre: 'Elena S.', tipo: 'terapeuta', edad: 'adolescente' },
    { nombre: 'Valentina P.', tipo: 'psiquiatra', edad: 'adulto' },
    { nombre: 'Tomás Z.', tipo: 'psiquiatra', edad: 'adolescente' },
  ];

  function actualizarProfesionales() {
    const tipo = tipoProfesional.value;
    const grupoEdad = edad.value;

    // Limpiar el select
    selectProfesional.innerHTML = '<option value="">Selecciona un profesional</option>';

    const filtrados = profesionales.filter(p => p.tipo === tipo && p.edad === grupoEdad);

    filtrados.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.nombre;
      opt.textContent = p.nombre;
      selectProfesional.appendChild(opt);
    });
  }

  tipoProfesional.addEventListener('change', actualizarProfesionales);
  edad.addEventListener('change', actualizarProfesionales);
});
