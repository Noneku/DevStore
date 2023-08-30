import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import jwtDecode from 'jwt-decode'; // Assurez-vous que cette dépendance est correctement importée.
import './index.css';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import Profile from './Components/Profile';
import Login from './Components/Login';
import Product from './Components/Product';
import Category from './Components/Category';
import SignUpForm from './Components/SignUpForm';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const TokenUser = localStorage.getItem('authToken');
  let decodedToken = null;

  if (isAuthenticated) {
    const token = TokenUser;
    decodedToken = jwtDecode(token);
  }

  useEffect(() => {
    TokenUser && setIsAuthenticated(true);
  }, [TokenUser, setIsAuthenticated]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route exact path="/" element={<Home />} />
            <Route path="/inscription" element={<SignUpForm />} />
            <Route path="/login" element={<Login />} />
          </>
        ) : (
          <>
            <Route exact path="/" element={<Home />} />
            <Route path="/inscription" element={<SignUpForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/category/:category" element={<Category />} />
          </>
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
