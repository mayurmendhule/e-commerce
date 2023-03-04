import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import logo from '../Header/logo.jpg'

const Header = ({cartItems}) => {
  return (
    <header className='header'>
        <div>
            <h1>
                
                <img src={logo} className='logopng' alt='logo'/> 
                <Link to="/" className='logo'> 
                GameFrenzy</Link>
            </h1>
        </div>
        <div className='header-links'>
            <ul>
                <li>
                    <Link to="/card" className='card'>
                    <span class="material-symbols-outlined">shopping_cart</span>
                    <span className='card-length'>
                        {cartItems.length === 0 ? "" : cartItems.length}
                    </span>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header
