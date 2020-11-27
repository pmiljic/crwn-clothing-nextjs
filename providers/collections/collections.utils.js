import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export async function fetchCollections() {
    const collectionRef = firestore.collection('collections')
    const snapshot = await collectionRef.get()
    const collections = await convertCollectionsSnapshotToMap(snapshot)
    return collections
}

export const getCollectionsForPreview = collections => {
    return collections ? Object.keys(collections).map(key => collections[key]) : []
}

export const getCollectionById = (collectionUrlParam, collections) => {
    return collections ? collections[collectionUrlParam] : null
}
