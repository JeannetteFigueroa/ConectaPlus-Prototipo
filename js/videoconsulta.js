// videoconsulta.js
document.addEventListener('DOMContentLoaded', () => {
  const localVideo = document.getElementById('localVideo');
  const remoteVideo = document.getElementById('remoteVideo');
  const btnToggleMic = document.getElementById('btnToggleMic');
  const btnToggleCam = document.getElementById('btnToggleCam');
  const btnEndCall = document.getElementById('btnEndCall');

  let localStream;
  let micEnabled = true;
  let camEnabled = true;

  // Obtener cámara y micrófono y mostrar localVideo
  async function startLocalStream() {
    try {
      localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      localVideo.srcObject = localStream;
      // Aquí se podría conectar con WebRTC para remoteVideo
    } catch (error) {
      alert('No se pudo acceder a la cámara o micrófono: ' + error.message);
    }
  }

  btnToggleMic.addEventListener('click', () => {
    if (!localStream) return;
    micEnabled = !micEnabled;
    localStream.getAudioTracks().forEach(track => track.enabled = micEnabled);
    btnToggleMic.setAttribute('aria-pressed', micEnabled);
    btnToggleMic.innerHTML = micEnabled
      ? '<i class="fa fa-microphone"></i>'
      : '<i class="fa fa-microphone-slash"></i>';
    btnToggleMic.setAttribute('aria-label', micEnabled ? 'Silenciar micrófono' : 'Activar micrófono');
  });

  btnToggleCam.addEventListener('click', () => {
    if (!localStream) return;
    camEnabled = !camEnabled;
    localStream.getVideoTracks().forEach(track => track.enabled = camEnabled);
    btnToggleCam.setAttribute('aria-pressed', camEnabled);
    btnToggleCam.innerHTML = camEnabled
      ? '<i class="fa fa-video"></i>'
      : '<i class="fa fa-video-slash"></i>';
    btnToggleCam.setAttribute('aria-label', camEnabled ? 'Apagar cámara' : 'Encender cámara');
  });

  btnEndCall.addEventListener('click', () => {
    if (localStream) {
      localStream.getTracks().forEach(track => track.stop());
    }
    alert('La llamada ha finalizado.');
    // Aquí podrías redirigir o cerrar ventana
    history.back();
  });

  startLocalStream();
});
