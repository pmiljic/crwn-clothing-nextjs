import { useContext } from 'react'

import { useRouter } from 'next/router'

import CartItem from '../cart-item/cart-item'

import { CartContext } from '../../providers/cart/cart.provider'

import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
} from './cart-dropdown.styles'

const CartDropdown = () => {
    const { cartItems, toggleHidden } = useContext(CartContext)
    const router = useRouter()

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                    )}
            </CartItemsContainer>
            <CartDropdownButton
                onClick={() => {
                    router.push('/checkout')
                    toggleHidden()
                }}
            >
                GO TO CHECKOUT
        </CartDropdownButton>
        </CartDropdownContainer>
    )
}

export default CartDropdown
