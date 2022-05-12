import React from 'react'
import {
  FooterElements,
  FooterContainer,
  ButtonScroll,
  Title,
  Subtitle
} from './style'
import { useRouter } from 'next/router'
import { i18n } from '../../../shared/i18n'

export const Footer = () => {
  const { locale } = useRouter()
  const { cttVersion, buttonScrollVersion } = i18n[locale]

  const scrollFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <FooterContainer>
      <FooterElements>
        <Title> BooKollection </Title>
        <Subtitle> {cttVersion} 0.1 </Subtitle>
      </FooterElements>
      <ButtonScroll onClick={scrollFunction}>
        {' '}
        {buttonScrollVersion}{' '}
      </ButtonScroll>
    </FooterContainer>
  )
}
