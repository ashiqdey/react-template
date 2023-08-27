import { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';

import Iconify from './Iconify';
import MenuPopover from './MenuPopover';

MoreMenuButton.propTypes = {
  children: PropTypes.node,
};
export default function MoreMenuButton({ children, ...props }) {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButton onClick={handleOpen} {...props}>
        <Iconify icon='mdi:dots-vertical' width={16} height={16} />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        arrow='right-top'
        sx={{
          mt: -0.5,
          width: 160,
          '& .MuiMenuItem-root': {
            px: 1,
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        {children}
      </MenuPopover>
    </>
  );
}
