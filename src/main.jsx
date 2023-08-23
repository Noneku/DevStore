import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SignUpForm from './components/SignUpForm.jsx'
import { Footer } from './components/Footer.jsx'
import {Header} from './components/Header.jsx'
import { Home } from './components/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header /> 
    <Home />
    {/* <SignUpForm /> */}
    <Footer />
  </React.StrictMode>,
)
