import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/homepage/Home';
import Restaurants from './pages/restaurants/Restaurants';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/restaurants' element={<Restaurants />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
