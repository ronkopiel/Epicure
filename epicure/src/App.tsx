import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/homepage/Home';
import Restaurants from './pages/restaurants/Restaurants';
import Chefs from './pages/chefs/Chefs';
import Restaurant from './pages/restaurants/Restaurant';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/restaurants' element={<Restaurants />}/>
      <Route path='/chefs' element={<Chefs />}/>
      <Route path='/restarants/:name' element={<Restaurant />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
