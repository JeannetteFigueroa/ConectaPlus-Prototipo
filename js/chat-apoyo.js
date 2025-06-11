document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chatForm');
    const mensajeInput = document.getElementById('mensajeInput');
    const chatMensajes = document.getElementById('chatMensajes');

    // Autoajuste de altura del textarea
    mensajeInput.addEventListener('input', () => {
        mensajeInput.style.height = 'auto';
        mensajeInput.style.height = mensajeInput.scrollHeight + 'px';
    });

    // Envío de mensajes
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const texto = mensajeInput.value.trim();
        
        if(texto) {
            agregarMensaje(texto, 'enviado');
            mensajeInput.value = '';
            mensajeInput.style.height = 'auto';
            
            // Simular respuesta después de 1 segundo
            setTimeout(() => {
                agregarMensaje('Gracias por tu mensaje. Te responderé en breve.', 'recibido');
            }, 1000);
        }
    });

    function agregarMensaje(texto, tipo) {
        const mensajeDiv = document.createElement('div');
        mensajeDiv.className = `mensaje ${tipo}`;
        
        const hora = new Date().toLocaleTimeString('es-CL', {
            hour: '2-digit',
            minute: '2-digit'
        });

        mensajeDiv.innerHTML = `
            <p>${texto}</p>
            <span class="hora">${hora}</span>
        `;
        
        chatMensajes.appendChild(mensajeDiv);
        chatMensajes.scrollTop = chatMensajes.scrollHeight;
    }

    // Envío con Enter (sin Shift)
    mensajeInput.addEventListener('keydown', (e) => {
        if(e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            chatForm.dispatchEvent(new Event('submit'));
        }
    });
});
