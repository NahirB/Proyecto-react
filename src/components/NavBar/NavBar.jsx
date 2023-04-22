import React from "react";
import './navbar.css';
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return (
        <div className="menu">
            <Link className='link' to="/">Inicio</Link>
            <Link className='link' to='/productos/papelera'>Papelera</Link>
            <Link className='link' to='/productos/accesorios'>Accesorios</Link>
            <Link className='link' to='/cart'><CartWidget/></Link>
        </div>
    )
}