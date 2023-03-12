import React from 'react'
import {Routes, Route} from "react-router-dom";
import Products from './products/products'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import NotFound from './utils/NotFound/NotFound';
import OneProduct from './OneProduct/OneProduct';

export default function Pages() {
  return (
    <div className='mainPage'>
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/detail/:id" element={<OneProduct/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/cart" element={<Cart />}/>

      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </div>
  )
}
