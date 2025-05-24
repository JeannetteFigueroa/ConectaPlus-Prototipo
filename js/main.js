document.addEventListener('DOMContentLoaded', () => {
  // Obtener usuario
  const usuario = JSON.parse(localStorage.getItem('usuarioConecta')) || { nombre: "Usuario", rol: "vecino" };
  const greeting = document.getElementById('greeting');
  greeting.textContent = `Hola, ${usuario.nombre}`;

  // Ranking dinámico
  const rankingTitle = document.getElementById('rankingTitle');
  const rankingList = document.getElementById('rankingList');
  rankingList.innerHTML = ""; // Limpia

  if (usuario.rol === "profesional") {
    rankingTitle.textContent = "Ranking de Profesionales";
    // Ejemplo de ranking de profesionales
    const profesionales = [
      { nombre: "Dra. Andrea Soto", puntos: 690, avatar: "image/avatar1.png" },
      { nombre: "Lic. Pablo Ruiz", puntos: 610, avatar: "image/avatar1.png" },
      { nombre: "Srta. Camila León", puntos: 580, avatar: "image/avatar1.png" }
    ];
    profesionales.forEach(prof => {
      rankingList.innerHTML += `
        <div class="ranking-card">
          <img src="${prof.avatar}" alt="Avatar" class="avatar">
          <span class="nombre-vecino">${prof.nombre}</span>
          <span class="estrella">⭐</span>
          <span class="puntos">${prof.puntos}</span>
        </div>
      `;
    });
  } else {
    rankingTitle.textContent = "Ranking de Buen Vecino";
    // Ejemplo de ranking de vecinos
    const vecinos = [
      { nombre: "Nicolás", puntos: 485, avatar: "image/avatar1.png" },
      { nombre: "Valentina", puntos: 430, avatar: "image/avatar1.png" },
      { nombre: "Martín", puntos: 405, avatar: "image/avatar1.png" }
    ];
    vecinos.forEach(vecino => {
      rankingList.innerHTML += `
        <div class="ranking-card">
          <img src="${vecino.avatar}" alt="Avatar" class="avatar">
          <span class="nombre-vecino">${vecino.nombre}</span>
          <span class="estrella">⭐</span>
          <span class="puntos">${vecino.puntos}</span>
        </div>
      `;
    });
  }

  // Menú hamburguesa
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburger.setAttribute('aria-expanded', navMenu.classList.contains('show'));
  });

  // Oculta el menú al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove('show');
      hamburger.setAttribute('aria-expanded', false);
    }
  });

  // Opcional: Oculta menú al hacer clic en un enlace
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
      hamburger.setAttribute('aria-expanded', false);
    });
  });
});


  // Menú de cuenta tipo GitHub
  const accountBtn = document.getElementById('accountBtn');
  const accountMenu = document.getElementById('accountMenu');
  accountBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    accountMenu.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!accountMenu.contains(e.target)) {
      accountMenu.classList.remove('open');
    }
  });
});

 document.getElementById('btnNecesitoOfrezco').addEventListener('click', () => {
    window.location.href = 'necesito_ofrezco.html';
  });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
      const text = this.textContent.trim();
      if (text.includes('Apoyo emocional')) {
        window.location.href = 'apoyo_emocional.html';
      } else if (text.includes('Formación')) {
        window.location.href = 'formacion.html';
      } else if (text.includes('Servicios sociales')) {
        window.location.href = 'servicios_sociales.html';
      }
    });
  });
});
