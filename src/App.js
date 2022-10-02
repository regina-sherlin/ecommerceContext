import React from 'react'
import { Footer, Blog, Products } from './containers'

import { Navbar } from './components'
import { Routes, Route} from 'react-router-dom'
import { CartProvider } from './contexts/Context'

function App() {
  return (
    <div className='container'>
        <header>
          <div className='header__container'>
            <div className="header__left">
              <div className="header__logo">
                  Pringles
              </div>
          </div>

          <div className='header__right'>
              <Navbar />
          </div>
        </div>
      
        </header>
      <div className="hero">
        <CartProvider>
        <Routes>
            <Route path ="/products" element={<Products />} />
            <Route path ="/blog" element={<Blog />} />
        </Routes>
        </CartProvider>
      </div>

        <Footer />
    </div>
  )
}

export default App