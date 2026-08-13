import createGlobe from "https://cdn.jsdelivr.net/npm/cobe@7.0.0/+esm";

function initGlobe(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  let phi = 0;

  const globe = createGlobe(canvas, {
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
      // longitude latitude
      { location: [37.7595, -122.4367], size: 0.03 },
      { location: [40.7128, -74.006], size: 0.1 }
    ],
    onRender: (state) => {
      // Called on every animation frame.
      state.phi = phi;
      phi += 0.01;
    }
  });
}

function start() {
  initGlobe("cobe-canvas");
  initGlobe("cobe-canvas-about");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}
