import { CustomButtonContainer } from './custom-button.styles'

export default function CustomButton({ children, ...props }) {
    return (
        <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
    )
}
