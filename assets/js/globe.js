(function() {
  function initGlobe(canvasId) {
    var canvas = document.getElementById(canvasId);
    if (!canvas || typeof window.createGlobe !== 'function') return;

    var phi = 0;

    // Use fixed dimensions exactly like the original React code
    var globe = window.createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 }
      ],
      onRender: function(state) {
        state.phi = phi;
        phi += 0.01;
      }
    });
  }

  // Wait for everything to be fully loaded and laid out
  window.addEventListener('load', function() {
    setTimeout(function() {
      initGlobe('cobe-globe');
      initGlobe('cobe-globe-about');
    }, 100);
  });
})();
