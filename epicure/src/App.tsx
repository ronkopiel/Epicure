import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/homepage/homepage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
