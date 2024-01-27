import { Divider, useTheme } from '@mui/material'
import { BoxContainer, CenterText } from '../../components/atoms'
import {
  MyCollectionDetails,
  MyCollectionEditions
} from '../../components/organisms'
import { StyledBox } from './style'
import { i18n } from '../../shared/i18n'
import { useRouter } from 'next/router'

const Collection = () => {
  const { locale } = useRouter()
  const { details, literaryWork } = i18n[locale]
  const theme = useTheme()
  const dividerStyle = {
    '::before': {
      content: '""',
      borderTop: `1px solid ${theme.palette.primary.contrastText}`
    },
    '::after': {
      content: '""',
      borderTop: `1px solid ${theme.palette.primary.contrastText}`
    }
  }
  return (
    <BoxContainer padding={2} color={theme.palette.primary.contrastText}>
      <StyledBox>
        <Divider sx={{ ...dividerStyle }} light flexItem>
          <CenterText fontSize={18}>{details}</CenterText>
        </Divider>
        <MyCollectionDetails />
        <Divider sx={{ ...dividerStyle }} light flexItem>
          <CenterText fontSize={18}>{literaryWork}</CenterText>
        </Divider>
        <MyCollectionEditions />
      </StyledBox>
    </BoxContainer>
  )
}

export { Collection }
