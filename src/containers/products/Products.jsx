import React, { useContext} from 'react'
import './products.css'
import ProductsList from './ProductsList'
import products from '../../assets/product_images'
import { CartContext } from '../../contexts/Context';

function Products() {
  
  const {cart} = useContext(CartContext);

  return (
    <div className="products__wrapper">
        <div className="products__header">
          <h4>Products</h4>
          <p>{"Cart: " + cart}</p>
        </div>

        <div className="products__body">
          {products.map((product) => 
            <ProductsList data={product} key={product.id}/>
          )}
        </div>
    </div>
  )
}

export default Products