import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';   // ✅ Import Router
import './index.css';
import App from './App.jsx';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>   {/* ✅ Wrap App with Router */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);
