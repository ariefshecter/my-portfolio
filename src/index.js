import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

/**
 * Entry point
 * - Wrap App with BrowserRouter for routing
 * - Use React 18 createRoot API
 */

const container = document.getElementById("root");
if (!container) throw new Error("Root container not found: make sure public/index.html has a <div id=\"root\"></div>");

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Optional: measure performance (pass a function to log or send metrics)
reportWebVitals();
