
document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([0, 0], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  function onLocationFound(e) {
    const radius = e.accuracy;
    L.marker(e.latlng).addTo(map).bindPopup('¡Aquí estás!').openPopup();
    L.circle(e.latlng, radius).addTo(map);
    map.setView(e.latlng, 15);
  }

  function onLocationError(e) {
    alert('No se pudo obtener la ubicación: ' + e.message);
  }

  map.locate({ setView: true, maxZoom: 15 });
  map.on('locationfound', onLocationFound);
  map.on('locationerror', onLocationError);
});

document.addEventListener('DOMContentLoaded', () => {
  const iframe = document.getElementById('archive-player');
  const btnPlay = document.getElementById('btn-play');
  const btnForward = document.getElementById('btn-forward');
  const btnBackward = document.getElementById('btn-backward');

  let playing = false;

  btnPlay.addEventListener('click', () => {
    if (!playing) {
      iframe.contentWindow.postMessage(
        { method: 'play' },
        'https://archive.org'
      );
      btnPlay.textContent = '⏸️';
    } else {
      iframe.contentWindow.postMessage(
        { method: 'pause' },
        'https://archive.org'
      );
      btnPlay.textContent = '▶️';
    }
    playing = !playing;
  });

  btnForward.addEventListener('click', () => {
    alert('Adelantar pista (implementación futura)');
  });

  btnBackward.addEventListener('click', () => {
    alert('Retroceder pista (implementación futura)');
  });
});

document.body.addEventListener('click', () => {
  const taxi = document.getElementById('taxi');
  taxi.style.left = 'calc(100% + 120px)';
  setTimeout(() => {
    taxi.style.left = '-120px';
  }, 2200);
});

// REPRODUCTOR DE AUDIO (tu código original que me diste antes)

const songs = [
  "https://ia600906.us.archive.org/2/items/reproductor_202506/BACHATA%20MIX%201.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/CHICHA%20ECUATORIANA%203.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/MAMBO%20MIX%204.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/REGGAETON%20MIX%202.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/SALSA%20MIX%203.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/VALLENATO%20MIX%205.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/BACHATA%20MIX%201.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/BACHATA%20MIX%202.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/BACHATA%20MIX%203.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/BACHATA%20MIX%204.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/BACHATA%20MIX%205.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/CHECHA%20ECUATORIANA%202.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/CHICHA%20ECUATORIANA%201.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/CHICHA%20ECUATORIANA%203.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/CHICHA%20ECUATORIANA%204.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/CHICHA%20ECUATORIANA%205.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/DJ%20PARTY%20MIX%201.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/DJ%20PARTY%20MIX%202.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/DJ%20PARTY%20MIX%203.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/DJ%20PARTY%20MIX%204.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/DJ%20PARTY%20MIX%205.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/MAMBO%20MIX%201.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/MAMBO%20MIX%202.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/MAMBO%20MIX%203.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/MAMBO%20MIX%204.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/MAMBO%20MIX%205.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/MERENGUE%20MIX%201.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/MERENGUE%20MIX%202.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/MERENGUE%20MIX%203.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/MERENGUE%20MIX%204.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/MERENGUE%20MIX%205.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/REGGAETON%20MIX%201.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/REGGAETON%20MIX%202.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/REGGAETON%20MIX%203.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/REGGAETON%20MIX%204.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/REGGAETON%20MIX%205.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/SALSA%20MIX%201.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/SALSA%20MIX%202%20.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/SALSA%20MIX%203.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/SALSA%20MIX%204.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/SALSA%20MIX%205.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/VALLENATO%20MIX%201.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/VALLENATO%20MIX%202.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/VALLENATO%20MIX%203.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/VALLENATO%20MIX%204.mp3",
  "https://ia600906.us.archive.org/2/items/reproductor_202506/VALLENATO%20MIX%205.mp3"
];

songs.sort(() => Math.random() - 0.5);

let currentIndex = 0;
const audio = document.getElementById("audio");
const trackName = document.getElementById("trackName");
const playPauseBtn = document.getElementById("playPauseBtn");
audio.src = songs[currentIndex];

function updateTrackName() {
  const urlParts = songs[currentIndex].split("/");
  const fileName = decodeURIComponent(urlParts[urlParts.length - 1]);
  trackName.textContent = fileName.replace(".mp3", "");
}