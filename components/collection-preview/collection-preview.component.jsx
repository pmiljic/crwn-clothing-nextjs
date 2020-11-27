import { useRouter } from 'next/router'

import CollectionItem from '../collection-item/collection-item.component'

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './collection-preview.styles'

const CollectionPreview = ({ title, items, routeName }) => {
  const router = useRouter()
  return (
    <CollectionPreviewContainer onClick={() => router.push(`${router.pathname}/${routeName}`).then(() => window.scrollTo(0, 0))}>
      <TitleContainer >
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default CollectionPreview
