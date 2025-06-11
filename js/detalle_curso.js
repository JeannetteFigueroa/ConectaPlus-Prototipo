document.addEventListener('DOMContentLoaded', () => {
  const cursos = {
    "matematicas-basicas": {
      titulo: "Curso de Matemáticas Básicas",
      imagen: "image/matematicas.jpg",
      descripcion: "Aprende operaciones, proporciones, fracciones y resolución de problemas cotidianos. Ideal para estudiantes y adultos que quieran reforzar sus habilidades numéricas.",
      duracion: "40 horas",
      modalidad: "Online",
      fecha: "Disponible todo el año",
      contenido: [
        "Números reales y operaciones básicas",
        "Expresiones algebraicas y polinomios",
        "Factorización y productos notables",
        "Ecuaciones e inecuaciones",
        "Funciones cuadráticas y exponenciales"
      ],
      certificado: "Sí, certificado digital al completar el curso",
      instructor: "Prof. Juan Pérez",
      contacto: "juan.perez@conecta.cl",
      lugar: "Modalidad online, acceso desde cualquier lugar"
    },
    "alfabetizacion-digital": {
      titulo: "Alfabetización Digital",
      imagen: "image/alfabetizacion.jpg",
      descripcion: "Aprende a usar smartphones, navegar por internet, realizar trámites digitales y proteger tu información. Dirigido a personas de todas las edades.",
      duracion: "20 horas",
      modalidad: "Presencial",
      fecha: "Próximo inicio: 3 Junio 2025",
      contenido: [
        "Uso básico de smartphone y apps",
        "Navegación segura en internet",
        "Correo electrónico y redes sociales",
        "Trámites digitales comunes",
        "Seguridad y privacidad digital"
      ],
      certificado: "Sí, certificado físico y digital",
      instructor: "Sra. María López",
      contacto: "maria.lopez@conecta.cl",
      lugar: "Centro Comunitario Conecta+, Av. Libertad 123"
    },
    "finanzas-familiares": {
      titulo: "Educación Financiera Familiar",
      imagen: "image/finanzas.jpg",
      descripcion: "Organiza tu presupuesto, evita deudas, ahorra y toma mejores decisiones financieras para tu familia. Incluye ejercicios prácticos.",
      duracion: "30 horas",
      modalidad: "Online",
      fecha: "Disponible todo el año",
      contenido: [
        "Presupuestos familiares",
        "Ahorro y planificación financiera",
        "Crédito responsable y manejo de deudas",
        "Inversiones básicas",
        "Protección al consumidor"
      ],
      certificado: "Sí, certificado digital al completar el curso",
      instructor: "Lic. Carla Méndez",
      contacto: "carla.mendez@conecta.cl",
      lugar: "Modalidad online, acceso desde cualquier lugar"
    },
    "habilidades-laborales": {
      titulo: "Taller de Habilidades Laborales",
      imagen: "image/laboral.jpg",
      descripcion: "Mejora tu empleabilidad aprendiendo a preparar tu currículum, afrontar entrevistas y desarrollar habilidades blandas y digitales.",
      duracion: "12 horas",
      modalidad: "Online",
      fecha: "Próximo inicio: 10 Mayo 2025",
      contenido: [
        "Elaboración de currículum vitae",
        "Preparación para entrevistas laborales",
        "Comunicación efectiva y trabajo en equipo",
        "Uso básico de herramientas digitales",
        "Manejo del estrés laboral"
      ],
      certificado: "Sí, certificado digital al completar el taller",
      instructor: "Sr. Andrés Torres",
      contacto: "andres.torres@conecta.cl",
      lugar: "Modalidad online, acceso desde cualquier lugar"
    }
  };

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const detalle = cursos[id];
  const detalleDiv = document.getElementById('detalleCurso');

  if (detalle) {
    detalleDiv.innerHTML = `
      <img src="${detalle.imagen}" alt="${detalle.titulo}" class="detalle-img" />
      <h1>${detalle.titulo}</h1>
      <p class="descripcion">${detalle.descripcion}</p>
      <div class="detalle-meta">
        <span><i class="fa fa-calendar-alt"></i> ${detalle.fecha}</span>
        <span><i class="fa fa-clock"></i> ${detalle.duracion}</span>
        <span><i class="fa fa-globe"></i> ${detalle.modalidad}</span>
      </div>
      <h3>Contenido del curso:</h3>
      <ul class="contenido-list">
        ${detalle.contenido.map(item => `<li>${item}</li>`).join('')}
      </ul>
      <p><strong>Certificado:</strong> ${detalle.certificado}</p>
      <p><strong>Instructor:</strong> ${detalle.instructor}</p>
      <p><strong>Contacto:</strong> <a href="mailto:${detalle.contacto}">${detalle.contacto}</a></p>
      <p><strong>Lugar:</strong> ${detalle.lugar}</p>
    `;
  } else {
    detalleDiv.innerHTML = "<p>Curso no encontrado.</p>";
    document.getElementById('formularioInscripcion').style.display = "none";
  }

  // Formulario inscripción
  const form = document.getElementById('inscripcionForm');
  const mensajeExito = document.getElementById('mensajeExito');
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.style.display = "none";
    mensajeExito.style.display = "block";
  });
});
