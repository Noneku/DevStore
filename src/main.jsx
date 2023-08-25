import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import SignUpForm from './components/SignUpForm.jsx'
import { Footer } from './Components/Footer.jsx'
import {Header} from './Components/Header.jsx'
import { Home } from './Components/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './Components/Profile.jsx'
import Login from './Components/Login'
import Product from './Components/Product'
import Category from './Components/Category'
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>           
        <Route path="/inscription" element={<SignUpForm/>}/>
        <Route path="/profile" element={<Profile/>}/>   
        <Route path="/login" element={<Login/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/category/:category" element={<Category/>}/>       
      </Routes>
      <Footer />
    </BrowserRouter>
)
