document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const accountBtn = document.getElementById('accountBtn');
  const accountDropdown = document.getElementById('accountDropdown');

  // Toggle menú hamburguesa
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
    navMenu.classList.toggle('active'); // usa "active" para coherencia CSS
  });

  // Toggle menú cuenta
  accountBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = accountDropdown.hasAttribute('hidden');
    if (isHidden) {
      accountDropdown.removeAttribute('hidden');
    } else {
      accountDropdown.setAttribute('hidden', '');
    }
  });

  // Cerrar menús al hacer clic fuera
  document.addEventListener('click', () => {
    accountDropdown.setAttribute('hidden', '');
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', false);
  });

  accountDropdown.addEventListener('click', e => e.stopPropagation());

  // Datos de ejemplo para chats con mensajes aleatorios
  const chats = [
    {
      id: 1,
      name: 'Ana Gómez',
      avatar: 'image/avatar1.png',
      messages: generarMensajesAleatorios(),
    },
    {
      id: 2,
      name: 'Carlos Pérez',
      avatar: 'image/avatar2.png',
      messages: generarMensajesAleatorios(),
    },
    {
      id: 3,
      name: 'Lucía Fernández',
      avatar: 'image/avatar3.png',
      messages: generarMensajesAleatorios(),
    }
  ];

  const chatList = document.getElementById('chatList');
  const chatTitle = document.getElementById('chatTitle');
  const chatMessages = document.getElementById('chatMessages');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');

  let currentChatId = null;

  // Función para generar mensajes aleatorios
  function generarMensajesAleatorios() {
    const textos = [
      "Hola, ¿cómo estás?",
      "¿Has visto el último video tutorial?",
      "Claro, podemos agendar una cita.",
      "Estoy aquí para ayudarte.",
      "¿Quieres que te envíe más información?",
      "Perfecto, quedo atento.",
      "Gracias por tu mensaje.",
      "Nos vemos pronto."
    ];
    const cantidad = Math.floor(Math.random() * 6) + 3; // 3 a 8 mensajes
    const mensajes = [];
    for (let i = 0; i < cantidad; i++) {
      mensajes.push({
        text: textos[Math.floor(Math.random() * textos.length)],
        sent: Math.random() > 0.5,
        timestamp: new Date().toLocaleTimeString()
      });
    }
    return mensajes;
  }

  // Renderizar lista de chats
  function renderChatList() {
    chatList.innerHTML = '';
    chats.forEach(chat => {
      const li = document.createElement('li');
      li.setAttribute('role', 'option');
      li.tabIndex = 0;
      li.classList.toggle('active', chat.id === currentChatId);
      li.innerHTML = `
        <img src="${chat.avatar}" alt="Avatar de ${chat.name}" />
        <span>${chat.name}</span>
      `;
      li.addEventListener('click', () => selectChat(chat.id));
      li.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectChat(chat.id);
        }
      });
      chatList.appendChild(li);
    });
  }

  // Seleccionar chat
  function selectChat(id) {
    currentChatId = id;
    const chat = chats.find(c => c.id === id);
    chatTitle.textContent = chat.name;
    renderMessages(chat.messages);
    chatForm.hidden = false;
    renderChatList();
    chatInput.focus();
  }

  // Renderizar mensajes
  function renderMessages(messages) {
    chatMessages.innerHTML = '';
    messages.forEach(msg => {
      const div = document.createElement('div');
      div.className = 'message ' + (msg.sent ? 'sent' : 'received');
      div.textContent = msg.text;
      chatMessages.appendChild(div);
    });
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Enviar mensaje
  chatForm.addEventListener('submit', e => {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text || currentChatId === null) return;
    const chat = chats.find(c => c.id === currentChatId);
    chat.messages.push({ text, sent: true, timestamp: new Date().toLocaleTimeString() });
    renderMessages(chat.messages);
    chatInput.value = '';
    chatInput.focus();
  });

  // Inicializar mostrando la primera conversación
  if (chats.length > 0) {
    selectChat(chats[0].id);
  } else {
    chatForm.hidden = true;
  }

  renderChatList();
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

