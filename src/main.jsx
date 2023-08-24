import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import SignUpForm from './components/SignUpForm.jsx'
import { Footer } from './components/Footer.jsx'
import {Header} from './components/Header.jsx'
import { Home } from './components/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './components/Profile.jsx'
import Login from './components/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>           
        <Route path="/inscription" element={<SignUpForm/>}/>
        <Route path="/profile" element={<Profile/>}/>   
        <Route path="/login" element={<Login/>}/>       
      </Routes>
      <Footer />
    </BrowserRouter>
)
