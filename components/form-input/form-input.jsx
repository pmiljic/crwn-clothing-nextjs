import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel
} from './form-input.styles'

export default function FormInput({ handleChange, label, ...props }) {
    return (
        <GroupContainer>
            <FormInputContainer onChange={handleChange} {...props} />
            {label ? (
                <FormInputLabel className={props.value.length ? 'shrink' : ''}>
                    {label}
                </FormInputLabel>
            ) : null}
        </GroupContainer>
    )
}