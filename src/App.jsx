import React, { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Cart from './components/Cart'
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;








