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
import AddItem from './components/AddItem/addItem';
import ListView from './components/Log/listView/list'
import Main from './components/main/main';
import { Provider } from 'react-redux';
import { Store } from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<App />} />
          <Route path='/aboutapplication' element={<AboutApplication/>} />
          <Route path='/allitems' element={<AllItems />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/addItems' element ={<AddItem />} />
          <Route path='/listView' element ={<ListView />} />
          <Route path='/main' element ={<Main />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
