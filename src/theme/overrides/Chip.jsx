import { alpha } from '@mui/material/styles';

import { CloseIcon } from './CustomIcons';

// ----------------------------------------

export default function Chip(theme) {
  const softStyle = (color, type = 'main') => ({
    props: { variant: 'soft', color },
    style: {
      color: theme.palette[color][type],
      backgroundColor: alpha(theme.palette[color].main, 0.1),
    },
  });

  return {
    MuiChip: {
      defaultProps: {
        deleteIcon: <CloseIcon />,
      },

      variants: [
        softStyle('primary'),
        softStyle('secondary', 'darker'),
        softStyle('info'),
        softStyle('success'),
        softStyle('warning', 'darker'),
        softStyle('error'),
      ],

      styleOverrides: {
        colorDefault: {
          '& .MuiChip-avatarMedium, .MuiChip-avatarSmall': {
            color: theme.palette.text.secondary,
          },
        },
        outlined: {
          borderColor: theme.palette.grey[500_32],
          '&.MuiChip-colorPrimary': {
            borderColor: theme.palette.primary.main,
          },
          '&.MuiChip-colorSecondary': {
            borderColor: theme.palette.secondary.main,
          },
        },
        //
        avatarColorInfo: {
          color: theme.palette.info.contrastText,
          backgroundColor: theme.palette.info.dark,
        },
        avatarColorSuccess: {
          color: theme.palette.success.contrastText,
          backgroundColor: theme.palette.success.dark,
        },
        avatarColorWarning: {
          color: theme.palette.warning.contrastText,
          backgroundColor: theme.palette.warning.dark,
        },
        avatarColorError: {
          color: theme.palette.error.contrastText,
          backgroundColor: theme.palette.error.dark,
        },
      },
    },
  };
}
