import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import Sobre from './paginas/Sobre';

export default function Rotas() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home /> } />
                <Route path='/sobre' element={<Sobre /> } />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
