import { useContext, useEffect } from 'react'

import { CollectionsContext } from '../providers/collections/collections.provider'

import CollectionsOverviewContainer from '../components/collections-overview/collections-overview.container'

import { fetchCollections } from '../providers/collections/collections.utils'

import { ShopPageContainer } from '../styles/shop.styles'

export default function Shop() {
    const { isFetching, toggleFetching, collections, updateCollections } = useContext(CollectionsContext)

    useEffect(() => {
        if (!collections) {
            fetchCollections().then(collections => updateCollections(collections)).then(() => toggleFetching(false))
        }
    }, [])

    return (
        <ShopPageContainer >
            <CollectionsOverviewContainer isLoading={isFetching} />
        </ShopPageContainer >
    )
}
