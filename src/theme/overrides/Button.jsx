import { alpha } from '@mui/material/styles';

// ----------------------------------------

export default function Button(theme) {
  const softStyle = (color) => ({
    props: { variant: 'soft', color },
    style: {
      color: theme.palette[color].main,
      backgroundColor: alpha(theme.palette[color].main, 0.1),
      '&:hover': {
        color: theme.palette[color].darker,
        backgroundColor: alpha(theme.palette[color].main, 0.3),
      },
    },
  });

  return {
    MuiButton: {
      variants: [
        softStyle('primary'),
        softStyle('secondary'),
        softStyle('info'),
        softStyle('success'),
        softStyle('warning'),
        softStyle('error'),
      ],

      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
        sizeMedium: {
          height: 46,
        },
        sizeLarge: {
          height: 54,
        },
        // contained
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z8,
          '&:hover': {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          boxShadow: theme.customShadows.primary,
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary,
        },
        containedInfo: {
          boxShadow: theme.customShadows.info,
        },
        containedSuccess: {
          boxShadow: theme.customShadows.success,
        },
        containedWarning: {
          boxShadow: theme.customShadows.warning,
        },
        containedError: {
          boxShadow: theme.customShadows.error,
        },
        // outlined
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
