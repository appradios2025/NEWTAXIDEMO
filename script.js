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
