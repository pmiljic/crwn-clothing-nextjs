import { useState } from 'react'

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
} from './sign-in.styles'

const SignIn = () => {
    const [userCredentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const { email, password } = userCredentials

    const handleSubmit = async event => {
        event.preventDefault()
        try {
            await auth.signInWithEmailAndPassword(email, password)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = event => {
        const { value, name } = event.target

        setCredentials({ ...userCredentials, [name]: value })

    }

    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='password'
                    required
                />
                <ButtonsBarContainer>
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                </CustomButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    )
}

export default SignIn
