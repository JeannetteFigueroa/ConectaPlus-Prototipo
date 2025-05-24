document.addEventListener('DOMContentLoaded', () => {
  const usuario = JSON.parse(localStorage.getItem('usuarioConecta')) || { nombre: "Usuario" };
  const welcomeUser = document.getElementById('welcomeUser');
  welcomeUser.textContent = `${usuario.nombre}, te damos la bienvenida.`;
});
