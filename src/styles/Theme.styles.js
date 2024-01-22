export const theme = {
  colors: {
    primary: {
      'marineBlue': 'hsl(213, 96%, 18%)',
      'purplishBlue': 'hsl(243, 100%, 62%)',
      'pastelBlue': 'hsl(228, 100%, 84%)',
      'lightBlue': 'hsl(206, 94%, 87%)',
      'strawberryRed': 'hsl(354, 84%, 57%)',
    },
    neutral: {
      'coolGray': 'hsl(231, 11%, 63%)',
      'lightGray': 'hsl(229, 24%, 87%)',
      'magnolia': 'hsl(217, 100%, 97%)',
      'alabaster': 'hsl(231, 100%, 99%)',
      'white': 'hsl(0, 0%, 100%)'
    }
  },
  fonts: {
    primary: ['Ubuntu', 'sans-serif'].join(', '),
  },
  fontSizes: {
    smallMobile: '0.6rem',
    smallDesktop: '0.8rem',
    regularMobile: '0.8rem',
    regularDesktop: '1rem',
    largeMobile: '1.3rem',
    largeDesktop: '2rem',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  breakpoints: {
    desktop: '376px',
  }
};
