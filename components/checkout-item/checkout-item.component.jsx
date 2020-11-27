import { useContext } from 'react'

import { CartContext } from '../../providers/cart/cart.provider'

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span >{quantity}</span>
        <div onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
