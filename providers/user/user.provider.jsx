import React, { createContext } from 'react'

import { useLocalStorage } from '../../hooks/useLocalStorage'

export const UserContext = createContext({
    currentUser: null,
    updateUser: () => { },
})

const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useLocalStorage('currentUser', null)

    const updateUser = user => setCurrentUser(user)

    return (
        <UserContext.Provider
            value={{
                currentUser,
                updateUser
            }}

        >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
