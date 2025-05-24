document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const accountBtn = document.getElementById('accountBtn');
  const accountDropdown = document.getElementById('accountDropdown');

  // Toggle menú hamburguesa
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
    navMenu.classList.toggle('show');
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
    navMenu.classList.remove('show');
    hamburger.setAttribute('aria-expanded', false);
  });

  accountDropdown.addEventListener('click', e => e.stopPropagation());

  // Datos de ejemplo para chats
  const chats = [
    {
      id: 1,
      name: 'Ana Gómez',
      avatar: 'image/avatar1.png',
      messages: [
        { text: 'Hola, ¿cómo estás?', sent: false, timestamp: '10:00' },
        { text: 'Bien, gracias. ¿Y tú?', sent: true, timestamp: '10:01' },
      ],
    },
    {
      id: 2,
      name: 'Carlos Pérez',
      avatar: 'image/avatar2.png',
      messages: [
        { text: '¿Puedes ayudarme con el proyecto?', sent: false, timestamp: '09:30' },
      ],
    },
  ];

  const chatList = document.getElementById('chatList');
  const chatTitle = document.getElementById('chatTitle');
  const chatMessages = document.getElementById('chatMessages');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');

  let currentChatId = null;

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

  // Inicializar
  renderChatList();
});
