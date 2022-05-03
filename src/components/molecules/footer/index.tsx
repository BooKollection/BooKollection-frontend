import React from 'react';
import { FooterElements, FooterContainer, ButtonScroll, Title, Subtitle} from './style';
import { useRouter } from 'next/router'
import { cttVersions, buttonScrollVersions } from '../../../shared/i18n/footer';

const Footer = () => {
    const { locale } = useRouter()
    const { cttVersion } = cttVersions[locale]
    const { buttonScrollVersion } = buttonScrollVersions[locale]

    const scrollFunction = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }; 
    return(
        <FooterContainer>
            <FooterElements>
                <Title> BooKollection </Title>
                <Subtitle> {cttVersion} 0.1 </Subtitle>
            </FooterElements>
            <ButtonScroll onClick={scrollFunction}> {buttonScrollVersion} </ButtonScroll>
        </FooterContainer>
    )
}

export default Footer