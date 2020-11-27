import { useContext } from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { CollectionsContext } from '../../providers/collections/collections.provider';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

import { useRouter } from 'next/router'

const CollectionPage = () => {
  const { getCollection } = useContext(CollectionsContext);

  const router = useRouter()
  const collection = getCollection(router.query.collection)

  return (
    <CollectionPageContainer>
      <CollectionTitle>{collection.title}</CollectionTitle>
      <CollectionItemsContainer>
        {collection.items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;