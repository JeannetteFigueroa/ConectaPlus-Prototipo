// recomendaciones.js
document.addEventListener('DOMContentLoaded', () => {
  const recomendaciones = [
    {
      titulo: "Uso de Velas Aromáticas",
      tipo: "Técnica de relajación",
      descripcion: "Las velas aromáticas con esencias como lavanda o eucalipto ayudan a crear un ambiente relajante que favorece la reducción del estrés y la ansiedad."
    },
    {
      titulo: "Baños de Sales y Hierbas",
      tipo: "Terapia natural",
      descripcion: "Tomar baños con sales minerales y hierbas como manzanilla o romero puede ayudar a relajar el cuerpo y la mente, mejorando el bienestar emocional."
    },
    {
      titulo: "Técnicas de Respiración Profunda",
      tipo: "Ejercicio psicológico",
      descripcion: "Practicar respiración profunda y consciente ayuda a controlar la ansiedad y el estrés, promoviendo la calma en momentos difíciles."
    },
    {
      titulo: "Mindfulness y Meditación",
      tipo: "Práctica terapéutica",
      descripcion: "La meditación guiada y el mindfulness ayudan a aumentar la atención plena y reducir pensamientos negativos recurrentes."
    },
    {
      titulo: "Consulta con Terapeutas Especializados",
      tipo: "Apoyo profesional",
      descripcion: "Contar con un psicólogo o terapeuta puede brindar acompañamiento personalizado para enfrentar dificultades emocionales y mejorar la salud mental."
    },
    {
      titulo: "Ejercicio Físico Regular",
      tipo: "Recomendación general",
      descripcion: "La actividad física regular libera endorfinas, que son hormonas que mejoran el estado de ánimo y reducen síntomas de depresión y ansiedad."
    }
  ];

  const lista = document.getElementById('recomendacionesList');

  recomendaciones.forEach(rec => {
    const card = document.createElement('article');
    card.className = 'recomendacion-card';
    card.tabIndex = 0;
    card.innerHTML = `
      <h2>${rec.titulo}</h2>
      <div class="tipo">${rec.tipo}</div>
      <p>${rec.descripcion}</p>
    `;
    lista.appendChild(card);
  });
});
