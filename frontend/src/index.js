import "./polyfills";
import "./asyncStoragePolyfill";
import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";

console.log('React app initializing...');

try {
  const rootElement = document.getElementById("root");
  console.log('Root element found:', rootElement);
  
  if (!rootElement) {
    throw new Error('Root element not found');
  }
  
  const root = ReactDOM.createRoot(rootElement);
  console.log('React root created');
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
  
  console.log('App rendered successfully');
} catch (error) {
  console.error('Failed to initialize React app:', error);
  document.body.innerHTML = `
    <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
      <h1>Application Error</h1>
      <p>Failed to load the application: ${error.message}</p>
      <button onclick="window.location.reload()">Reload Page</button>
    </div>
  `;
}
