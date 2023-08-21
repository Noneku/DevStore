import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Footer } from './Components/Footer.jsx'
import Header from './Components/Header.jsx'
import { Home } from './Components/Home.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header /> 
    <Home />
    <Footer />
  </React.StrictMode>,
)
