import React from 'react'
import './cta.css'

function Cta({action_text}) {
  return (
    <div className="product__buy-btn">{action_text}</div>
  )
}

export default Cta