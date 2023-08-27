import { pxToRem, responsiveFontSizes } from '../utils/getFontValue';

// ----------------------------------------

// const FONT_PRIMARY = 'Public Sans, sans-serif'; // Google Font
const FONT_PRIMARY = 'Poppins, Helvetica, sans-serif, arial'; // Google Font
// const FONT_SECONDARY = 'CircularStd, sans-serif'; // Local Font

const createFont = (size = 1, props = {}) => {
  const maps = {
    1: {
      lineHeight: 1.25,
      fontSize: pxToRem(38),
      letterSpacing: 1.5,
      ...responsiveFontSizes({ sm: 38, md: 38, lg: 40 }),
    },
    2: {
      lineHeight: 1.5,
      fontSize: pxToRem(30),
      ...responsiveFontSizes({ sm: 30, md: 30, lg: 32 }),
    },
    3: {
      lineHeight: 1.5,
      fontSize: pxToRem(22),
      ...responsiveFontSizes({ sm: 22, md: 22, lg: 24 }),
    },
    4: {
      lineHeight: 1.5,
      fontSize: pxToRem(18),
      ...responsiveFontSizes({ sm: 18, md: 18, lg: 20 }),
    },
    5: {
      lineHeight: 1.5,
      fontSize: pxToRem(16),
      ...responsiveFontSizes({ sm: 16, md: 16, lg: 17 }),
    },
    6: {
      lineHeight: 1.25,
      fontSize: pxToRem(14),
      ...responsiveFontSizes({ sm: 14, md: 14, lg: 14 }),
    },
  };

  return { ...maps[size], ...props };
};

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,

  h1: createFont(1, { fontWeight: 600, letterSpacing: 1.5 }),
  h2: createFont(2, { fontWeight: 600 }),
  h3: createFont(3, { fontWeight: 600 }),
  h4: createFont(4, { fontWeight: 600 }),
  h5: createFont(5, { fontWeight: 600 }),
  h6: createFont(6, { fontWeight: 600 }),

  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },

  font1: createFont(1),
  font2: createFont(2),
  font3: createFont(3),
  font4: createFont(4),
  font5: createFont(5),
  font6: createFont(6),

  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
  },
};

export default typography;
