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
    const vecinos = [
      { nombre: "Nicolás", puntos: 485, avatar: "image/avatar2.png" },
      { nombre: "Valentina", puntos: 430, avatar: "image/avatar1.png" },
      { nombre: "Martín", puntos: 405, avatar: "image/avatar4.png" }
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
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
  });

  // Cerrar menú al hacer clic en enlace (móvil)
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Cerrar menú al redimensionar a escritorio
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
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

  // Botón Necesito/Ofrezco
  const btnNecesitoOfrezco = document.getElementById('btnNecesitoOfrezco');
  if (btnNecesitoOfrezco) {
    btnNecesitoOfrezco.addEventListener('click', () => {
      window.location.href = 'necesito_ofrezco.html';
    });
  }

  // Eventos para tarjetas
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

// Función para cambiar tamaño de fuente (puede estar fuera del DOMContentLoaded)
function cambiarFuente(opcion) {
  const html = document.documentElement;
  let size = parseInt(html.style.fontSize) || 16;
  if(opcion === 1) size += 2;
  else if(opcion === -1) size -= 2;
  else size = 16;
  html.style.fontSize = size + "px";
}
