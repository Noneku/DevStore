import React, { useState } from 'react'
import './App.css'
import Login from './components/Login'
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;








