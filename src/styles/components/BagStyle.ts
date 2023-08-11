import { styled } from '..';

export const BagContent = styled('div', {
  height: '100%',
  width: 0,
  position: 'fixed',
  zIndex: 1,
  top: 0,
  right: 0,
  background: '$gray800',
  overflowX: 'hidden',
  transition: '0.5s',
  boxShadow: 'rgba(0, 0, 0, 0.9) 0px 5px 15px',
  justifyContent: 'space-between',
  display: 'flex',
  flexDirection: 'column'
})

export const BagContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const BagClose = styled('div', {
  padding: '2rem 2rem',
  display: 'flex',
  width: '100%',
  justifyContent: 'end',
})

export const BagHeader = styled('div', {
  padding: '1rem 3rem',
  display: 'flex',
  width: '100%',
})

export const BagBody = styled('div', {
  padding: '1rem 3rem',
  gap: '1rem',
  display: 'flex',
  flexDirection: 'column'
})

export const BagFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '3rem',
  gap: '1rem',

  div: {
    width: '100%',
    justifyContent: 'space-between',
    display: 'flex',

    h3: {
      fontSize: 20,
      fontWeight: 'bold',
    }
  },

  button: {
    marginTop: '2rem',
    width: '100%',
    height: '69px',
    borderRadius: 8,
    border: 'none',
    backgroundColor: '$green500',
    color: '$white',
    fontWeight: 'bold',
    fontSize: 18,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$green300'
    },

    '&:disabled': {
      backgroundColor: '$gray300',
      cursor: 'auto'
    }
  }
})

export const ProductSample = styled('div', {
  display: 'flex',
  gap: '1rem',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    width: '100%',
    alignContent: 'space-between',
    justifyContent: 'space-between',


    h4: {
      fontWeight: 'normal',
      color: '$gray400'
    },

    p: {
      border: 'none',
      background: 'transparent',
      padding: 0,
      color: '$green500',
      fontSize: '0.75rem',
      cursor: 'pointer',

      "&:hover": {
        color: '$green300'
      }
    },
  },
})

export const ImageSample = styled('div', {
  width: '100%',
  maxWidth: 80,
  height: 80,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.75rem 0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }
})