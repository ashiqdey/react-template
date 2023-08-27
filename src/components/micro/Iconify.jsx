import PropTypes from 'prop-types';
// icons
import { Icon } from '@iconify/react';
// @mui
import Box from '@mui/material/Box';

// -----------------------------------------------

Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  sx: PropTypes.object,
};

export default function Iconify({ icon, size, sx, ...other }) {
  return (
    <Box
      component={Icon}
      icon={icon}
      sx={{
        height: size,
        width: size,
        ...sx,
      }}
      {...other}
    />
  );
}
