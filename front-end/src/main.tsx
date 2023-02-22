import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Providers } from './providers'
import { GlobalStyle } from './styles/global-style'
import { Toaster } from "react-hot-toast";







ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Toaster/>
    <Providers>
      <GlobalStyle/>
      <App />
    </Providers>
  </React.StrictMode>,
)
