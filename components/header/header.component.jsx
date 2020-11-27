import { useContext, useEffect } from 'react'

import Link from 'next/link'

import { useRouter } from 'next/router'

import CartDropdown from '../cart-dropdown/cart-dropdown'
import CartIcon from '../cart-icon/cart-icon'

import { UserContext } from '../../providers/user/user.provider'
import { CartContext } from '../../providers/cart/cart.provider'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import {
    HeaderContainer,
    LogoContainer,
    LogoLink,
    OptionsContainer,
    OptionLink
} from './header.styles'

export default function Header() {
    const { hidden } = useContext(CartContext)

    const { currentUser, updateUser } = useContext(UserContext)
    const router = useRouter()

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)
                userRef.onSnapshot(snapShot => {
                    updateUser(
                        {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    )
                    router.replace('/')
                })
            } else {
                updateUser(userAuth)
            }
        })
        return () => {
            unsubscribeFromAuth()
        }
    }, [])

    return (
        <HeaderContainer>
            <LogoContainer>
                <Link href="/">
                    <LogoLink>
                        <img src="/crown.svg" alt="logo" />
                    </LogoLink>
                </Link>
            </LogoContainer>
            <OptionsContainer>
                <Link href="/shop">
                    <OptionLink>SHOP</OptionLink>
                </Link>
                <Link href="/contact">
                    <OptionLink>CONTACT</OptionLink>
                </Link>
                {currentUser ? (
                    <OptionLink onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                ) : (
                        <Link href="/sign-in-and-sign-up" as="/signin">
                            <OptionLink>SIGN IN</OptionLink>
                        </Link>
                    )}
                <CartIcon />
            </OptionsContainer>
            {hidden ? null : <CartDropdown />}
        </HeaderContainer>
    )
}
