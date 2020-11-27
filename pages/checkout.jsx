import React, { useContext } from 'react'

import CheckoutItem from '../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../components/stripe-button/stripe-button.component'

import { CartContext } from '../providers/cart/cart.provider'

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
} from '../styles/checkout.styles'

export default function CheckoutPage() {
    const { cartItems, cartTotal } = useContext(CartContext)

    return (
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer>
                    <span>Product</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Remove</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <TotalContainer>TOTAL: ${cartTotal}</TotalContainer>
            <WarningContainer>
                *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
    </WarningContainer>
            <StripeCheckoutButton price={cartTotal} />
        </CheckoutPageContainer>
    )
}
