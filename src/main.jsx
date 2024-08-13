import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { ThemeProvider } from "@material-tailwind/react";
import './index.css'
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './Redux/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
<ThemeProvider>

        <App />
</ThemeProvider>

    </PersistGate>

  </Provider>
)
