document.addEventListener('DOMContentLoaded', () => {
  const consultasList = document.querySelector('.consultas-list');

  // Función para cancelar una consulta (simulación)
  function cancelarConsulta(event) {
    const btn = event.target;
    const li = btn.closest('li');
    if (confirm('¿Estás seguro que deseas cancelar esta consulta?')) {
      li.remove();
      alert('Consulta cancelada correctamente.');
    }
  }

  // Delegación de evento para botones cancelar
  consultasList.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-cancelar') || event.target.closest('.btn-cancelar')) {
      cancelarConsulta(event);
    }
  });
});
