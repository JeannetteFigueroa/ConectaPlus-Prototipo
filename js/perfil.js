document.addEventListener('DOMContentLoaded', () => {
  const nombreUsuario = document.getElementById('nombreUsuario');
  const correoUsuario = document.getElementById('correoUsuario');
  const tipoCuenta = document.getElementById('tipoCuenta');
  const rankingUsuario = document.getElementById('rankingUsuario');
  const puntosCanje = document.getElementById('puntosCanje');
  const avatarPerfil = document.getElementById('avatarPerfil');
  const avatarBtn = document.getElementById('avatarBtn');
  const accountDropdown = document.getElementById('accountDropdown');
  const accountBtn = document.getElementById('accountBtn');

  // Obtener datos del usuario desde localStorage
  const usuarioStr = localStorage.getItem('usuario');
  let usuario = null;

  if (usuarioStr) {
    try {
      usuario = JSON.parse(usuarioStr);
    } catch (error) {
      console.error('Error al parsear datos de usuario:', error);
    }
  }

  if (usuario) {
    nombreUsuario.textContent = usuario.nombre || 'Sin nombre';
    correoUsuario.textContent = usuario.correo || 'Sin correo';
    tipoCuenta.textContent = usuario.tipoCuenta || 'Sin tipo';
    rankingUsuario.textContent = usuario.ranking !== undefined ? `#${usuario.ranking}` : '-';
    puntosCanje.textContent = usuario.puntosCanje !== undefined ? usuario.puntosCanje : '0';

    // Cambiar avatar si existe URL
    if (usuario.avatarUrl) {
      avatarPerfil.src = usuario.avatarUrl;
      avatarBtn.src = usuario.avatarUrl;
    }
  } else {
    // No hay usuario, mostrar mensajes por defecto
    nombreUsuario.textContent = 'Invitado';
    correoUsuario.textContent = '';
    tipoCuenta.textContent = '';
    rankingUsuario.textContent = '-';
    puntosCanje.textContent = '0';
  }

  // Insertar contenido dinámico en menú de cuenta
  accountDropdown.innerHTML = `
    <div style="padding: 1rem; border-bottom: 1px solid #ddd; color: #254c7b;">
      <strong>${usuario?.nombre || 'Invitado'}</strong><br/>
      <small>${usuario?.correo || ''}</small><br/>
      <small>Cuenta: ${usuario?.tipoCuenta || 'Invitado'}</small><br/>
      <small>Ranking: ${usuario?.ranking !== undefined ? '#' + usuario.ranking : '-'}</small><br/>
      <small>Puntos de canje: ${usuario?.puntosCanje !== undefined ? usuario.puntosCanje : '0'}</small>
    </div>
    <a href="mi_cuenta.html">Mi perfil</a>
    <a href="#">Modificar cuenta</a>
    <a href="#">Cerrar sesión</a>
  `;

  // Manejo menú cuenta
  accountBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = accountDropdown.hasAttribute('hidden');
    if (isHidden) {
      accountDropdown.removeAttribute('hidden');
      accountBtn.setAttribute('aria-expanded', 'true');
    } else {
      accountDropdown.setAttribute('hidden', '');
      accountBtn.setAttribute('aria-expanded', 'false');
    }
  });

  accountDropdown.addEventListener('click', (e) => e.stopPropagation());

  document.addEventListener('click', () => {
    accountDropdown.setAttribute('hidden', '');
    accountBtn.setAttribute('aria-expanded', 'false');
  });
});


