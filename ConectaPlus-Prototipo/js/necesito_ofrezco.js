document.addEventListener('DOMContentLoaded', () => {
  const btnNuevoPost = document.getElementById('btnNuevoPost');
  const nuevoPostSection = document.getElementById('nuevoPostSection');
  const postsSection = document.querySelector('.posts-section');
  const btnCancelarPost = document.getElementById('btnCancelarPost');
  const formNuevoPost = document.getElementById('formNuevoPost');
  const postsList = document.getElementById('postsList');

  // Datos simulados iniciales
  const posts = [
    {
      tipo: 'necesito',
      titulo: 'Busco voluntarios para apoyo en comedor comunitario',
      descripcion: 'Necesito ayuda para organizar y repartir alimentos los fines de semana.',
      contacto: 'contacto@comedor.com',
    },
    {
      tipo: 'ofrezco',
      titulo: 'Ofrezco clases de apoyo escolar para niños',
      descripcion: 'Soy profesor voluntario y puedo ayudar en matemáticas y lenguaje.',
      contacto: 'profesor@ayuda.com',
    },
    {
      tipo: 'voluntariado',
      titulo: 'Voluntariado en limpieza de parques',
      descripcion: 'Organizamos jornadas de limpieza comunitaria cada mes.',
      contacto: 'voluntarios@parques.cl',
    },
  ];

  // Función para renderizar posts
  function renderPosts() {
    postsList.innerHTML = '';
    posts.forEach((post, index) => {
      const li = document.createElement('li');
      li.className = 'post-item';
      li.innerHTML = `
        <div class="post-tipo">${post.tipo.replace(/^\w/, c => c.toUpperCase())}</div>
        <div class="post-titulo">${post.titulo}</div>
        <div class="post-descripcion">${post.descripcion}</div>
        <div class="post-contacto">${post.contacto ? 'Contacto: ' + post.contacto : ''}</div>
      `;
      postsList.appendChild(li);
    });
  }

  // Mostrar formulario nuevo post
  btnNuevoPost.addEventListener('click', () => {
    postsSection.classList.add('hidden');
    nuevoPostSection.classList.remove('hidden');
  });

  // Cancelar nuevo post
  btnCancelarPost.addEventListener('click', () => {
    nuevoPostSection.classList.add('hidden');
    postsSection.classList.remove('hidden');
    formNuevoPost.reset();
  });

  // Enviar nuevo post
  formNuevoPost.addEventListener('submit', (e) => {
    e.preventDefault();
    const tipo = formNuevoPost.tipoPost.value;
    const titulo = formNuevoPost.tituloPost.value.trim();
    const descripcion = formNuevoPost.descripcionPost.value.trim();
    const contacto = formNuevoPost.contactoPost.value.trim();

    if (!tipo || !titulo || !descripcion) {
      alert('Por favor completa todos los campos obligatorios.');
      return;
    }

    posts.unshift({ tipo, titulo, descripcion, contacto });
    renderPosts();

    nuevoPostSection.classList.add('hidden');
    postsSection.classList.remove('hidden');
    formNuevoPost.reset();
  });

  // Inicializar
  renderPosts();
});
