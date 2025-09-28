import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutApplication from './components/AboutApplication/AboutApplication';
import AllItems from './components/AllItems/AllItems';
import Cart from './components/Cart/Cart';
import Login from './components/Log/Login';
import Register from './components/Log/Register';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<App />} />
        <Route path='/aboutapplication' element={<AboutApplication/>} />
        <Route path='/allitems' element={<AllItems />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
