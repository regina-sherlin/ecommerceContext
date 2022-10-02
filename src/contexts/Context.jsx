import  {createContext ,useState } from 'react'

const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cart, setCartValue] = useState(0);

    const updateCartValue = (changedCart) => {
        console.log(changedCart)
        
            if(changedCart.action === 'decrement' && cart > 0) {
                console.log('in')
                setCartValue(changedCart.currentValue - 1)
            }else if(changedCart.action === 'increment'){
                setCartValue(changedCart.currentValue + 1)
            }
        
        
    }

    return (
        <CartContext.Provider value={{cart, updateCartValue}}>
            {children}
        </CartContext.Provider>
    )
}

export {
    CartContext,
    CartProvider
}

