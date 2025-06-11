document.addEventListener('DOMContentLoaded', () => {
  // Datos ejemplo de psicólogos
  const psicologos = {
    "laura-g": {
      nombre: "Laura G.",
      foto: "image/psicologo2.jpg",
      especialidad: "Psicología Clínica",
      calificacion: 4.8,
      descripcion: "Especialista en terapia cognitivo-conductual con más de 10 años de experiencia."
    },
    "mario-r": {
      nombre: "Mario R.",
      foto: "image/psicologo1.jpg",
      especialidad: "Psiquiatría",
      calificacion: 4.6,
      descripcion: "Psiquiatra con amplia experiencia en trastornos del ánimo y ansiedad."
    },
    "elena-s": {
      nombre: "Elena S.",
      foto: "image/psicologo4.jpg",
      especialidad: "Terapia Familiar",
      calificacion: 4.9,
      descripcion: "Terapeuta especializada en dinámicas familiares y resolución de conflictos."
    }
  };

  // Obtener parámetro 'id' de la URL
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (id && psicologos[id]) {
    const p = psicologos[id];
    document.getElementById('nombrePsicologo').textContent = p.nombre;
    document.getElementById('fotoPsicologo').src = p.foto;
    document.getElementById('fotoPsicologo').alt = `Foto de ${p.nombre}`;
    document.getElementById('especialidad').textContent = p.especialidad;
    document.getElementById('calificacion').textContent = p.calificacion;
    document.getElementById('descripcion').textContent = p.descripcion;
  } else {
    document.getElementById('perfil').innerHTML = '<p>Psicólogo no encontrado.</p>';
  }
});


  const fotoElem = document.getElementById('fotoPsicologo');
  const nombreElem = document.getElementById('nombrePsicologo');
  const especialidadElem = document.getElementById('especialidad');
  const calificacionElem = document.getElementById('calificacion');
  const descripcionElem = document.getElementById('descripcion');


  // Asignar datos al DOM
  nombreElem.textContent = psicologo.nombre;
  especialidadElem.textContent = psicologo.especialidad;
  calificacionElem.textContent = psicologo.calificacion.toFixed(1);
  descripcionElem.textContent = psicologo.descripcion;
