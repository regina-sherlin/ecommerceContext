import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar__wrapper'>
      <ul>
        <li><Link to='/products' className='nav__link'>Products</Link></li>
        <li><Link to='/blog' className='nav__link'>Blog</Link></li>
        
      </ul>
    </div>
  )
}

export default Navbar