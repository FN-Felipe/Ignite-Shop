import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'flex'
})

export const Cart = styled('button', {
  width: 40,
  height: 40,
  backgroundColor: '$gray800',
  color: '$gray100',
  border: 'none',
  borderRadius: 6,
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 3,
  display: 'flex',

  icon: {
    position: 'fixed'
  },

  '&:hover': {
    backgroundColor: '$gray400',

    div: {
      backgroundColor: '$green300'
    }
  }
})

export const CartGreen = styled('button', {
  width: 40,
  height: 40,
  backgroundColor: '$green500',
  color: '$gray100',
  border: 'none',
  borderRadius: 6,
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 0,
  display: 'flex',

  icon: {
    position: 'fixed',
  },

  '&:hover': {
    backgroundColor: '$green300',
  }
})

export const CountCircle = styled('div', {
  width: 20,
  height: 20,
  backgroundColor: '$green500',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$gray100',
  borderRadius: 20,
  border: '2px solid $gray900',
  display: 'flex',
  position: 'absolute',
  marginBottom: 35,
  marginLeft: 30,
  fontSize: 9,
  paddingTop: 1
})