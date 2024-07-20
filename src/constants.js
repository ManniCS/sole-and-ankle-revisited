export const COLORS = {
  white: '0deg 0% 100%',
  gray: {
    100: '185deg 5% 95%',
    300: '190deg 5% 80%',
    500: '196deg 4% 60%',
    700: '220deg 5% 40%',
    900: '220deg 3% 20%',
  },
  primary: '340deg 65% 47%',
  secondary: '240deg 60% 63%',
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

// Values in pixels:
export const BREAKPOINTS = {
  mobileMax: 550,
  tabletMax: 1100,
  laptopMax: 1500,
}

// Converted to rems
export const QUERIES = {
  'mobileAndSmaller': `(max-width: ${BREAKPOINTS.mobileMax / 16}rem)`,
  'tabletAndSmaller': `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  'laptopAndSmaller': `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
}