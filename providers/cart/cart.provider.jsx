import React, { createContext, useState, useEffect } from 'react'

import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartItemsCount,
  getCartTotal,
  clearCartItems
} from './cart.utils'

import { useLocalStorage } from '../../hooks/useLocalStorage'

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => { },
  cartItems: [],
  addItem: () => { },
  removeItem: () => { },
  clearItemFromCart: () => { },
  cartItemsCount: 0,
  cartTotal: 0,
  clearCart: () => { }
})

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true)
  const [cartItems, setCartItems] = useLocalStorage('cartItems', [])
  const [cartItemsCount, setCartItemsCount] = useLocalStorage('cartItemsCount', 0)
  const [cartTotal, setCartTotal] = useLocalStorage('cartTotal', 0)

  const addItem = item => setCartItems(addItemToCart(cartItems, item))
  const removeItem = item => setCartItems(removeItemFromCart(cartItems, item))
  const toggleHidden = () => setHidden(!hidden)
  const clearItemFromCart = item =>
    setCartItems(filterItemFromCart(cartItems, item))
  const clearCart = () => setCartItems(clearCartItems())

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems))
    setCartTotal(getCartTotal(cartItems))
  }, [cartItems])


  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        removeItem,
        clearItemFromCart,
        cartItemsCount,
        cartTotal,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
