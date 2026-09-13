import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/AppContext.jsx' // <-- TAMBAHKAN INI

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider> {/* <-- WRAP APP DENGAN PROVIDER */}
      <App />
    </AppProvider>
  </React.StrictMode>,
)
