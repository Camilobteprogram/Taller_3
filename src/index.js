import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"; // npm i react-room
import Home from './pages/Home';
import Login from './pages/Login';
import Habitaciones from './pages/Habitaciones';
import Habitacion from './pages/Habitacion';
import Error404 from './pages/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<Routes>
  <Route path='/' element={<Home></Home>}></Route>  
  <Route path='/login' element={<Login></Login>}></Route> 
  <Route path='/habitaciones' element={<Habitaciones></Habitaciones>}></Route> 
  <Route path='/habitaciones/:id' element={<Habitacion></Habitacion>}></Route> 
  <Route path='*' element={<Error404></Error404>}></Route>  /*Mostrar error si se intenta acceder a un sitio web no especificado */
  <Route path='/home' element={<Navigate replace to="/"></Navigate>}></Route> /*Para acceso directo, reemplazar */
</Routes>
  </BrowserRouter>
);
