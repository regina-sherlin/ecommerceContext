import React, { useContext, useState } from 'react'
import './products.css'
// import Cta from '../../components/cta/Cta'
import { CartContext } from '../../contexts/Context'

function ProductsList({data}) {

    const {cart, updateCartValue}  = useContext(CartContext)
    const [showCartCounter, setShowCartCounter] = useState(false)

    const handleAddToCart = () => {
        updateCartValue({currentValue : cart, action : 'increment', value : 1})    
        setShowCartCounter(true);
    }

    

    const AddToCart = () => {
        return (
            <div className="product__add-cart-btn" onClick={handleAddToCart}>Add to Cart</div>      
        ) 
    }

    const AddToCartCounter = () => {

        const [clickCounter, setClickCounter] = useState(0)

        const handleIncrement = () => {
            updateCartValue({currentValue : cart, action : 'increment', value : 1})    
            setClickCounter((prev) => prev + 1)
        }
    
        const handleDecrement = () => {
            console.log('sss')
            updateCartValue({currentValue : cart, action : 'decrement', value : 1})    
            setClickCounter((prev) => prev - 1)
        }

        return (
            <div className="product__add-cart-counter">
                <div className='decrement_counter' onClick={handleDecrement}>-</div>
                <div className='counter_input'>{clickCounter}</div>
                <div className='increment_counter' onClick={handleIncrement}>+</div>
            </div> 
        )
    }

    const Cta = ({action_text}) => {
        return (
          <div className="product__buy-btn">{action_text}</div>
        )
      }
      

  return (
    <div className='product__list'>
        <div className="product__img" alt={"thumbnail"}>
            <img src={data.url}/>
        </div>

        <div className="product__info">
            <div className="product__info-left">
                <div className="product__title">Basic tee</div>
                <div className="product__description">Aspen white</div>
            </div>

            <div className="product__info-right">
                <div className="product__price">{'$ '+ data.price}</div>
            </div>
        </div>
        
        <div className='product__cta' >
           
            <div className="product__cta-left">
                { showCartCounter ? <AddToCartCounter /> : <AddToCart /> }
            </div>

            <div className="product__cta-right">
                <Cta action_text={'Buy'}  />
            </div>
    
        </div>
    </div>
  )
}

export default ProductsList