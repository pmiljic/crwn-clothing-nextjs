import { useContext } from 'react'

import Image from 'next/image'

import { CartContext } from '../../providers/cart/cart.provider'

import {
    CartContainer,
    ItemCountContainer
} from './cart-icon.styles'

export default function CartIcon() {
    const { toggleHidden, cartItemsCount } = useContext(CartContext)

    return (
        <CartContainer onClick={toggleHidden}>
            <Image src="/shopping-bag.svg" alt="logo" width={24} height={24} />
            <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
        </CartContainer>
    )
}
