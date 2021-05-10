import React from 'react'

import './header.css'
import Menu from '../menu'
import logo from './logo.png'

const Header = () => (
    <nav className='main-header navbar navbar-expand-md navbar-cooking navbar-white'>
        <div className='container'>
            <a href='/#' className='navbar-brand'>
                <img
                    src={logo}
                    alt='Cooking'
                    className='brand-image img-circle bg-black elevation-3'
                />
                <span className='brand-text ms-3'>Nome do projeto</span>
            </a>
            <button class='navbar-toggler order-1' type='button' data-toggle='collapse' data-target='#navbarCollapse' aria-controls='navbarCollapse' aria-expanded='false' aria-label='Toggle navigation'>
                <span class='navbar-toggler-icon'></span>
            </button>
            <Menu />
        </div>
    </nav>
)

export default Header