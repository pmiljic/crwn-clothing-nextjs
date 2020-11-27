import { useContext } from 'react'

import { CartContext } from '../../providers/cart/cart.provider'

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styles'

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const { addItem } = useContext(CartContext);

  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  )
}

export default CollectionItem
