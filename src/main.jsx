import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// 
import * as serviceWorker from './serviceWorker';
// import reportWebVitals from './reportWebVitals';
// 
import App from './App';
import { SettingsProvider } from './contexts/SettingsContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <HelmetProvider>
      <SettingsProvider>
        {/* <BrowserRouter basename={import.meta.env.VITE_FOLDER || '/'}> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SettingsProvider>
    </HelmetProvider>
  </React.StrictMode>,
)

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
