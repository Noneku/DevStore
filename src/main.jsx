import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import './index.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import Product from './components/Product';
import Category from './components/Category';
import SignUpForm from './components/SignUpForm';

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
      <Header isAuthenticated={isAuthenticated} decodedToken={decodedToken} />
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route exact path="/" element={<Home />} />
            <Route path="/inscription" element={<SignUpForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Login />} />
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

ReactDOM.render(<App />, document.getElementById('root'));
