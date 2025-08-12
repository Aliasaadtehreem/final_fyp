import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Auth0Provider  } from '@auth0/auth0-react';
import AppProvider from '@auth0/auth0-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const root =ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <Auth0Provider
    domain="dev-3cwcv8a6tofggres.us.auth0.com"
    clientId="K1BbmBajNZk3HiBlWFr0o9wmzwAVr2j7"
    redirectUri={window.Location.origin}
    >
      
        <App/>

        <ToastContainer position="top-right" autoClose={2000} />
    

  </Auth0Provider>


        
  

  </>
)
reportWebVitals();
