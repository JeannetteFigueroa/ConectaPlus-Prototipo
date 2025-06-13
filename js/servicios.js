document.addEventListener('DOMContentLoaded', () => {
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');

  sidebarToggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    sidebarToggle.setAttribute('aria-expanded', isOpen);
  });

  // Cerrar menú si se hace clic fuera del sidebar en móvil
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
      sidebar.classList.remove('open');
      sidebarToggle.setAttribute('aria-expanded', false);
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const serviceCards = document.querySelectorAll('.service-card');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();

    serviceCards.forEach(card => {
      const keywords = card.getAttribute('data-keywords');
      const title = card.querySelector('h3').textContent.toLowerCase();
      const content = card.textContent.toLowerCase();

      // Se filtra si el texto ingresado está en el título, keywords o contenido del artículo
      const matches =
        keywords.includes(query) ||
        title.includes(query) ||
        content.includes(query);

      card.style.display = matches ? 'block' : 'none';
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Sidebar toggle
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  sidebarToggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    sidebarToggle.setAttribute('aria-expanded', isOpen);
  });
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
      sidebar.classList.remove('open');
      sidebarToggle.setAttribute('aria-expanded', false);
    }
  });

  // Buscador de servicios
  const searchInput = document.getElementById('searchInput');
  const serviceCards = document.querySelectorAll('.service-card');
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    serviceCards.forEach(card => {
      const keywords = card.getAttribute('data-keywords');
      const title = card.querySelector('h3').textContent.toLowerCase();
      const content = card.textContent.toLowerCase();
      const matches =
        keywords.includes(query) ||
        title.includes(query) ||
        content.includes(query);
      card.style.display = matches ? 'block' : 'none';
    });
  });

  // Inicializar mapa Leaflet
  const lat = -33.45694;
  const lng = -70.64827;
  const zoom = 13;
  const map = L.map('map').setView([lat, lng], zoom);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const lugares = [
    {
      nombre: "Centro de Salud Comunitario",
      coords: [-33.447, -70.650],
      descripcion: "Atención médica y psicológica gratuita.",
    },
    {
      nombre: "Comedor Solidario San Juan",
      coords: [-33.455, -70.646],
      descripcion: "Almuerzos gratuitos de lunes a viernes.",
    },
    {
      nombre: "Oficina de Empleo Municipal",
      coords: [-33.453, -70.655],
      descripcion: "Orientación laboral y bolsa de trabajo.",
    },
  ];

  lugares.forEach((lugar) => {
    L.marker(lugar.coords)
      .addTo(map)
      .bindPopup(`<b>${lugar.nombre}</b><br>${lugar.descripcion}`);
  });
});

// Inicializar mapa
  const map = L.map('map').setView([-33.45694, -70.64827], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Datos de servicios con categorías y comunas
  const lugares = [
  {
    nombre: "Comedor Solidario Villa Francia",
    coords: [-33.520, -70.670],
    descripcion: "Almuerzos gratuitos para familias vulnerables.",
    categoria: "alimentacion",
    comuna: "La Granja"
  },
  {
    nombre: "Oficina de Empleo Municipal San Joaquín",
    coords: [-33.555, -70.620],
    descripcion: "Orientación laboral y bolsa de trabajo.",
    categoria: "empleo",
    comuna: "San Joaquín"
  },
  {
    nombre: "Centro de Apoyo a Personas Mayores Peñalolén",
    coords: [-33.470, -70.570],
    descripcion: "Actividades y acompañamiento para adultos mayores.",
    categoria: "infancia",
    comuna: "Peñalolén"
  },
  {
    nombre: "Asistencia Jurídica Vecinal La Cisterna",
    coords: [-33.560, -70.650],
    descripcion: "Orientación legal gratuita para familias vulnerables.",
    categoria: "juridica",
    comuna: "La Cisterna"
  },
  {
    nombre: "Programa Personas en Situación de Calle",
    coords: [-33.440, -70.650],
    descripcion: "Atención y acompañamiento a personas en situación de calle.",
    categoria: "apoyo_social",
    comuna: "Santiago Centro"
  },
  // Salud y Bienestar
  {
    nombre: "Programa de Salud Bucal San Joaquín",
    coords: [-33.555, -70.620],
    descripcion: "Atención odontológica para niños y adultos.",
    categoria: "salud",
    comuna: "San Joaquín"
  },
  // Alimentación
  {
    nombre: "Programa de Seguridad Alimentaria Peñalolén",
    coords: [-33.470, -70.570],
    descripcion: "Apoyo alimentario para personas en situación de vulnerabilidad.",
    categoria: "alimentacion",
    comuna: "Peñalolén"
  },
  // Empleo y Emprendimiento
  {
    nombre: "Oficina de Empleo Municipal San Joaquín",
    coords: [-33.555, -70.620],
    descripcion: "Orientación laboral y bolsa de trabajo.",
    categoria: "empleo",
    comuna: "San Joaquín"
  },
  {
    nombre: "Programa Emprendamos La Granja",
    coords: [-33.520, -70.670],
    descripcion: "Apoyo a emprendedores locales.",
    categoria: "empleo",
    comuna: "La Granja"
  },
  // Infancia y Personas Mayores
  {
    nombre: "Centro de Apoyo a Personas Mayores Peñalolén",
    coords: [-33.470, -70.570],
    descripcion: "Actividades y acompañamiento para adultos mayores.",
    categoria: "infancia",
    comuna: "Peñalolén"
  },
  {
    nombre: "Programa Vida Sana y Obesidad La Pintana",
    coords: [-33.578, -70.633],
    descripcion: "Promoción de hábitos saludables para niños y niñas.",
    categoria: "infancia",
    comuna: "La Pintana"
  },
  // Asistencia Jurídica y Social
  {
    nombre: "Asistencia Jurídica Vecinal La Cisterna",
    coords: [-33.560, -70.650],
    descripcion: "Orientación legal gratuita para familias vulnerables.",
    categoria: "juridica",
    comuna: "La Cisterna"
  },
  {
    nombre: "Programa Familias Santiago Centro",
    coords: [-33.440, -70.650],
    descripcion: "Acompañamiento integral para familias en pobreza extrema.",
    categoria: "juridica",
    comuna: "Santiago Centro"
  },
  // Apoyo Social y Personas en Situación de Calle
  {
    nombre: "Programa Personas en Situación de Calle Santiago Centro",
    coords: [-33.440, -70.650],
    descripcion: "Atención y acompañamiento a personas en situación de calle.",
    categoria: "apoyo_social",
    comuna: "Santiago Centro"
  }
   // Agrega aquí todos los servicios de todas las comunas...
];
   

  // Crear marcadores y almacenarlos para filtrado
  const markers = lugares.map(lugar => {
    const marker = L.marker(lugar.coords)
      .bindPopup(`<b>${lugar.nombre}</b><br>${lugar.descripcion}<br><em>${lugar.comuna}</em>`)
      .addTo(map);
    marker.categoria = lugar.categoria;
    return marker;
  });

  // Función para filtrar marcadores por categoría
  function filtrarMarcadores(categoria) {
    markers.forEach(marker => {
      if (categoria === 'todas' || marker.categoria === categoria) {
        marker.addTo(map);
      } else {
        map.removeLayer(marker);
      }
    });
  }

  // Control para agrandar/minimizar mapa
  L.control.zoom({ position: 'topright' }).addTo(map);

  // Manejar clicks en botones filtro
  const botones = document.querySelectorAll('#filtros button');
  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      botones.forEach(b => b.classList.remove('activo'));
      boton.classList.add('activo');
      filtrarMarcadores(boton.dataset.categoria);
    });
  });
