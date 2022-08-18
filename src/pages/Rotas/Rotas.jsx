
import {BrowserRouter, Route, Routes} from "react-router-dom"

import React from 'react'
import Autenticado from "../kanban"
import LoginSignup from "../LoginSignup"

function Rotas() {
  return (
<BrowserRouter>
<Routes>
    <Route path="/" element={<LoginSignup/>} />
    <Route path="/kanban" element={<Autenticado/>} /> 
</Routes>
</BrowserRouter>
  )
}

export default Rotas
