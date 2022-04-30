import {styled} from '@mui/material';

export const FooterContainer = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '13px',
    position: 'absolute',
    width: '100%',
    height: '76px',
    background: '#3E1F69'
  }))


export const FooterElements = styled('div')(() => ({
    color: '#FFFFFF'
}))

export const ButtonScroll = styled('button')(() => ({
    position: 'static',
    width: '127px',
    height: '20px',
    left: '336.5px',
    top: '43px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '19px',
    textDecorationLine: 'underline',
    color: '#FFFFFF',
    backgroundColor: '#3E1F69',
    border: 'none',
    '&:hover': {
        cursor: 'pointer'
    }
}))

export const Title = styled('b')(() => ({}))

export const Subtitle = styled('span')(() => ({}))
