// MAPA CON GEOLOCALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const map = L.map('map').setView([lat, lng], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; OpenStreetMap',
        }).addTo(map);

        L.marker([lat, lng]).addTo(map).bindPopup('Estás aquí').openPopup();
      },
      () => {
        document.getElementById('map').innerHTML = '<p>No se pudo obtener tu ubicación.</p>';
      }
    );
  } else {
    document.getElementById('map').innerHTML = '<p>Tu navegador no soporta geolocalización.</p>';
  }
});

// REPRODUCTOR DE AUDIO
const songs = [
  "https://ia600906.us.archive.org/2/items/reproductor_202506/BACHATA%20MIX%201.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/CHICHA%20ECUATORIANA%203.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/MAMBO%20MIX%204.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/REGGAETON%20MIX%202.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/SALSA%20MIX%203.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/VALLENATO%20MIX%205.mp3"
];

songs.sort(() => Math.random() - 0.5);

let currentIndex = 0;
const audio = document.getElementById('audio');
const trackName = document.getElementById('trackName');
const playPauseBtn = document.getElementById('playPauseBtn');
audio.src = songs[currentIndex];

function updateTrackName() {
  const urlParts = songs[currentIndex].split('/');
  const fileName = decodeURIComponent(urlParts[urlParts.length - 1]);
  trackName.textContent = fileName.replace('.mp3', '');
}

updateTrackName();

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = '⏸️';
  } else {
    audio.pause();
    playPauseBtn.textContent = '▶️';
  }
}

function nextSong() {
  currentIndex = (currentIndex + 1) % songs.length;
  audio.src = songs[currentIndex];
  updateTrackName();
  audio.play();
  playPauseBtn.textContent = '⏸️';
}

function prevSong() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  audio.src = songs[currentIndex];
  updateTrackName();
  audio.play();
  playPauseBtn.textContent = '⏸️';
}

audio.addEventListener('ended', nextSong);

// ANIMACIÓN DEL TAXI
document.body.addEventListener('click', () => {
  const taxi = document.getElementById('taxi');
  taxi.classList.remove('mover-derecha', 'mover-izquierda');
  taxi.classList.add('mover-derecha');
  setTimeout(() => {
    taxi.classList.remove('mover-derecha');
    taxi.classList.add('mover-izquierda');
  }, 3000);
});

// PWA INSTALL PROMPT (Android)
let deferredPrompt;
const installBanner = document.getElementById('install-banner');
const btnInstall = document.getElementById('btn-install-app');
const btnInstallClose = document.getElementById('btn-install-close');

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  installBanner.style.display = 'flex';
});

btnInstall.addEventListener('click', async () => {
  installBanner.style.display = 'none';
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
  }
});

btnInstallClose.addEventListener('click', () => {
  installBanner.style.display = 'none';
});

// iOS install instructions
function isIos() {
  return /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
}
function isInStandaloneMode() {
  return ('standalone' in window.navigator) && window.navigator.standalone;
}

window.addEventListener('load', () => {
  if (isIos() && !isInStandaloneMode()) {
    const iosInstruction = document.getElementById('ios-instruction');
    iosInstruction.style.display = 'block';

    document.getElementById('btn-ios-close').addEventListener('click', () => {
      iosInstruction.style.display = 'none';
    });
  }
});
