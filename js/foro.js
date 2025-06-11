// Almacena temas y comentarios en localStorage
const STORAGE_KEY = 'conecta_foro';

let foroData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  temas: []
};

const listaTemasEl = document.getElementById('listaTemas');
const buscarTemasInput = document.getElementById('buscarTemas');
const listaTemasSection = document.getElementById('listaTemasSection');
const verTemaSection = document.getElementById('verTemaSection');
const nuevoTemaSection = document.getElementById('nuevoTemaSection');
const temaDetalleEl = document.getElementById('temaDetalle');
const listaComentariosEl = document.getElementById('listaComentarios');
const formComentario = document.getElementById('formComentario');
const inputComentario = document.getElementById('inputComentario');
const btnVolver = document.getElementById('btnVolver');
const btnNuevoTema = document.getElementById('btnNuevoTema');
const btnCancelarNuevoTema = document.getElementById('btnCancelarNuevoTema');
const formNuevoTema = document.getElementById('formNuevoTema');
const botonesCategoria = document.querySelectorAll('.filtro-categoria');

let temaActualId = null;
let categoriaSeleccionada = 'todos';

// Renderizar lista de temas filtrada
function renderListaTemas(filtro = '') {
  listaTemasEl.innerHTML = '';
  let temasFiltrados = foroData.temas;

  if (categoriaSeleccionada !== 'todos') {
    temasFiltrados = temasFiltrados.filter(t => t.categoria === categoriaSeleccionada);
  }

  if (filtro.trim() !== '') {
    const f = filtro.toLowerCase();
    temasFiltrados = temasFiltrados.filter(t =>
      t.titulo.toLowerCase().includes(f) ||
      t.contenido.toLowerCase().includes(f)
    );
  }

  if (temasFiltrados.length === 0) {
    listaTemasEl.innerHTML = '<li>No hay temas que coincidan.</li>';
    return;
  }

  temasFiltrados.forEach(t => {
    const li = document.createElement('li');
    li.dataset.id = t.id;
    li.innerHTML = `
      <div class="titulo-tema">${t.titulo}</div>
      <div class="meta-tema">Categoría: ${categoriaNombre(t.categoria)} | ${new Date(t.fecha).toLocaleString()}</div>
      <div class="meta-tema">${t.comentarios.length} comentario(s)</div>
    `;
    li.addEventListener('click', () => abrirTema(t.id));
    listaTemasEl.appendChild(li);
  });
}

function categoriaNombre(cat) {
  switch(cat) {
    case 'apoyo_emocional': return 'Apoyo emocional';
    case 'formacion': return 'Formación';
    case 'servicios_sociales': return 'Servicios sociales';
    default: return 'General';
  }
}

// Abrir tema
function abrirTema(id) {
  temaActualId = id;
  const tema = foroData.temas.find(t => t.id === id);
  if (!tema) return;

  temaDetalleEl.innerHTML = `
    <h2>${tema.titulo}</h2>
    <p class="contenido">${tema.contenido}</p>
    <p><strong>Categoría:</strong> ${categoriaNombre(tema.categoria)}</p>
    <p><small>Creado el ${new Date(tema.fecha).toLocaleString()}</small></p>
  `;

  renderComentarios(tema.comentarios);

  listaTemasSection.classList.add('hidden');
  verTemaSection.classList.remove('hidden');
  nuevoTemaSection.classList.add('hidden');
}

// Renderizar comentarios
function renderComentarios(comentarios) {
  listaComentariosEl.innerHTML = '';
  if (comentarios.length === 0) {
    listaComentariosEl.innerHTML = '<li>No hay comentarios aún.</li>';
    return;
  }
  comentarios.forEach(c => {
    const li = document.createElement('li');
    li.textContent = c.texto;
    listaComentariosEl.appendChild(li);
  });
}

// Volver a lista
btnVolver.addEventListener('click', () => {
  temaActualId = null;
  listaTemasSection.classList.remove('hidden');
  verTemaSection.classList.add('hidden');
  nuevoTemaSection.classList.add('hidden');
  renderListaTemas(buscarTemasInput.value);
});

// Buscar
buscarTemasInput.addEventListener('input', () => {
  renderListaTemas(buscarTemasInput.value);
});

// Nuevo tema
btnNuevoTema.addEventListener('click', () => {
  listaTemasSection.classList.add('hidden');
  verTemaSection.classList.add('hidden');
  nuevoTemaSection.classList.remove('hidden');
});

btnCancelarNuevoTema.addEventListener('click', () => {
  listaTemasSection.classList.remove('hidden');
  verTemaSection.classList.add('hidden');
  nuevoTemaSection.classList.add('hidden');
  formNuevoTema.reset();
});

formNuevoTema.addEventListener('submit', e => {
  e.preventDefault();
  const titulo = document.getElementById('tituloTema').value.trim();
  const categoria = document.getElementById('categoriaTema').value;
  const contenido = document.getElementById('contenidoTema').value.trim();

  if (!titulo || !categoria || !contenido) {
    alert('Por favor completa todos los campos');
    return;
  }

  const nuevoTema = {
    id: Date.now().toString(),
    titulo,
    categoria,
    contenido,
    fecha: new Date().toISOString(),
    comentarios: []
  };

  foroData.temas.unshift(nuevoTema);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(foroData));

  formNuevoTema.reset();
  listaTemasSection.classList.remove('hidden');
  nuevoTemaSection.classList.add('hidden');
  renderListaTemas();
});

// Comentarios
formComentario.addEventListener('submit', e => {
  e.preventDefault();
  const texto = inputComentario.value.trim();
  if (!texto) return;

  const tema = foroData.temas.find(t => t.id === temaActualId);
  if (!tema) return;

  tema.comentarios.push({ texto, fecha: new Date().toISOString() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(foroData));
  inputComentario.value = '';
  renderComentarios(tema.comentarios);
});

// Menú responsive
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
});

// Filtrado por categoría
botonesCategoria.forEach(btn => {
  btn.addEventListener('click', () => {
    botonesCategoria.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    categoriaSeleccionada = btn.dataset.category;
    renderListaTemas(buscarTemasInput.value);
  });
});

// Inicializar
renderListaTemas();

// Función para cambiar tamaño de fuente (puede estar fuera del DOMContentLoaded)
function cambiarFuente(opcion) {
  const html = document.documentElement;
  let size = parseInt(html.style.fontSize) || 16;
  if(opcion === 1) size += 2;
  else if(opcion === -1) size -= 2;
  else size = 16;
  html.style.fontSize = size + "px";
}
