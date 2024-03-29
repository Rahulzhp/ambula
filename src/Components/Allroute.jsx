
import { Routes, Route } from "react-router-dom"
import React from 'react'
import Home from './Home'
import Login from './Login'
import Service from './Service'
import Menu from "./Menu"
import Cart from "./Cart"
import Todoroute from "./Todoroute"

const Allroute = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/todo' element={<Todoroute />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
        </Routes>
    )
}

export default Allroute