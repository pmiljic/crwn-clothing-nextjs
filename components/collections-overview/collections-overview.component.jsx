import { useContext, useEffect } from 'react'

import CollectionPreview from '../collection-preview/collection-preview.component'

import { CollectionsContext } from '../../providers/collections/collections.provider'

import { CollectionsOverviewContainer } from './collections-overview.styles'

const CollectionsOverview = () => {
  const { collectionsForPreview, updateCollections } = useContext(CollectionsContext)

  return (
    <CollectionsOverviewContainer>
      {collectionsForPreview.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  )
}

export default CollectionsOverview
