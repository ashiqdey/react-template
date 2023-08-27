/* eslint-disable react/display-name */
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import MUIAvatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';

// -----------------------------------------------

const getStatusColor = (theme, status) => {
  return ['online', 'active'].includes(status)
    ? theme.palette.success.main
    : theme.palette.grey[400];
};

const StyledBadge = styled(Badge)(({ theme, status }) => ({
  '& .MuiBadge-badge': {
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    color: getStatusColor(theme, status),
    backgroundColor: getStatusColor(theme, status),
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '1px solid currentColor',
      content: '""',
    },
  },
}));

// -----------------------------------------------

const Avatar = forwardRef(
  ({ color = 'default', status, children, sx, ...other }, ref) => {
    const theme = useTheme();

    if (status) {
      return (
        <StyledBadge
          overlap='circular'
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant='dot'
          status={status}
        >
          <Avatar {...other} />
        </StyledBadge>
      );
    }

    if (color === 'default') {
      return (
        <MUIAvatar ref={ref} sx={sx} {...other}>
          {children}
        </MUIAvatar>
      );
    }

    return (
      <MUIAvatar
        ref={ref}
        sx={{
          fontWeight: theme.typography.fontWeightMedium,
          color: theme.palette[color].contrastText,
          backgroundColor: theme.palette[color].main,
          // backgroundColor: theme.palette.grey[100],
          ...sx,
        }}
        {...other}
      >
        {children}
      </MUIAvatar>
    );
  }
);

Avatar.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
  status: PropTypes.string,
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
  ]),
};

export default Avatar;
