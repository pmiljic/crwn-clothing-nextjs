import { useRouter } from 'next/router'

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item.styles'

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const router = useRouter()
  return (
    <MenuItemContainer
      size={size}
      onClick={() => router.push(`${router.pathname}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className='background-image'
        imageUrl={imageUrl}
      />
      <ContentContainer className='content'>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  )
}

export default MenuItem
