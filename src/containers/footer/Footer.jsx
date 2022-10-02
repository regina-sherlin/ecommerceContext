import React from 'react'
import './footer.css'
function Footer() {
  return (
    <footer>
       <div className="footer-left">
            <h4>We are human and coffee</h4>
            <p>Hand roasted and sealed for freshness.Of the fifty coffee producing countries in the world, we chose three for this blend. Every year we go to the source to identify the coffee harvest and beans that best matches the</p>
        </div>
        <div className="footer-right">
            <div className="links">
                <div className="menu">
                    <ul>
                        <li>Home</li>
                        <li>Best Choice</li>
                        <li>Best Location</li>
                        <li>Best Price</li>
                    </ul>
                </div>
                <div className="service">
                    <ul>
                        <li>FAQ</li>
                        <li>How we work</li>
                        <li>Security</li>
                        <li>Blog</li>
                        
                    </ul>
                </div>
                <div className="about-us">
                    <ul>
                        <li>Career</li>
                        <li>Features</li>
                        <li>News</li>
                        
                    </ul>
                </div>
            </div>
        </div>  
    </footer>
  )
}

export default Footer