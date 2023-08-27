//
import {
  CheckboxIcon,
  CheckboxCheckedIcon,
  CheckboxIndeterminateIcon,
} from './CustomIcons';

// ----------------------------------------

export default function Checkbox(theme) {
  return {
    MuiCheckbox: {
      defaultProps: {
        icon: <CheckboxIcon />,
        checkedIcon: <CheckboxCheckedIcon />,
        indeterminateIcon: <CheckboxIndeterminateIcon />,
      },

      styleOverrides: {
        root: {
          padding: theme.spacing(1),
          '&.Mui-checked.Mui-disabled, &.Mui-disabled': {
            color: theme.palette.action.disabled,
          },
          '& .MuiSvgIcon-fontSizeMedium': {
            width: 28,
            height: 28,
          },
          '& .MuiSvgIcon-fontSizeSmall': {
            width: 22,
            height: 22,
          },
          svg: {
            fontSize: 28,
            '&[font-size=small]': {
              fontSize: 22,
            },
          },
        },
      },
    },
  };
}
