import {
    ContactUsContainer,
    SectionsContainer,
    SectionContainer,
    AddressIcon,
    PhoneIcon,
    EmailIcon,
    ItemTitle,
    ItemContact

} from '../styles/contact.styles'

export default function Contact() {
    return (
        <ContactUsContainer>
            <h1>Contact Us</h1>
            <SectionsContainer>
                <SectionContainer>
                    <img src="/location.svg" alt="icon" width={48} height={48} />
                    <ItemTitle>ADDRESS</ItemTitle>
                    <ItemContact>27 13 Lowe Haven</ItemContact>
                </SectionContainer>
                <SectionContainer>
                    <img src="/phone.svg" alt="icon" width={48} height={48} />
                    <ItemTitle>PHONE</ItemTitle>
                    <ItemContact>111 343 43 43</ItemContact>
                </SectionContainer>
                <SectionContainer>
                    <img src="/email.svg" alt="icon" width={48} height={48} />
                    <ItemTitle>EMAIL</ItemTitle>
                    <ItemContact>crwn@info.com</ItemContact>
                </SectionContainer>
            </SectionsContainer>
        </ContactUsContainer>
    )
}
