import React, { useContext } from 'react'
import {State} from "../../States";
import Menu from "./icons/menu.svg";
import Close from "./icons/close.svg";
import Cart from "./icons/cart.svg";

import {Link} from "react-router-dom";

export default function Header() {
  const value = useContext(State);
    return (
    <header>
        <div className='menu'>
            <img src={Menu} alt="" width="30"/>
        </div>

        <div className='logo'>
            <h1>
                <Link to="/" className='header-title'>shop market</Link>
            </h1>
        </div>

        <ul>
            <li><Link to="/">Products</Link></li>
            <li><Link className='auth-header' to="/login">Login</Link></li>
            <li><Link className='auth-header' to="/register" >Register</Link></li>

            <li>
                <img src={Close} alt="" width="30" className='menu'/>
            </li>

        </ul>

        <div className='cart-icon'>
            <span>0</span>
            <Link to="/cart">
                <img src={Cart} alt="" width="30" />
            </Link>
        </div>
    </header>
  )
}
