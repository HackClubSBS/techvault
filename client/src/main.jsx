import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SpacemanThemeProvider } from '@space-man/react-theme-animation';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <SpacemanThemeProvider>
      <App />
    </SpacemanThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
