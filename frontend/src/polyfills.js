// Polyfill for openapi-fetch
if (typeof global === 'undefined') {
  window.global = window;
}

// Fix for fetch polyfill
if (!global.fetch) {
  global.fetch = window.fetch;
}

// Fix for openapi-fetch default export
window.process = window.process || { env: {} };