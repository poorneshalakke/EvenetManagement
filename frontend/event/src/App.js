
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Ulogin from './authontcation/Ulogin.js';
import Uregister from './authontcation/Uregister.js';
import Home from './pages/Homes.js';

function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/Homes" element={<Home />}></Route>
  <Route path="/" element={<Ulogin />}></Route>
  <Route path="/register" element={<Uregister />}></Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
