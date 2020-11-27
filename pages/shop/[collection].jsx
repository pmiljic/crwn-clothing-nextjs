import { useContext, useEffect } from 'react'

import CollectionPageContainer from '../../components/collection/collection.container'

import { CollectionsContext } from '../../providers/collections/collections.provider'
import { fetchCollections } from '../../providers/collections/collections.utils'

import { ShopPageContainer } from '../../styles/shop.styles'

export default function CollectionPage() {
    const { isFetching, toggleFetching, collections, updateCollections } = useContext(CollectionsContext)

    useEffect(() => {
        if (!collections) {
            fetchCollections().then(collections => updateCollections(collections)).then(() => toggleFetching(false))
        }
    }, [])

    return (
        <ShopPageContainer >
            <CollectionPageContainer isLoading={isFetching} />
        </ShopPageContainer >
    )
}
