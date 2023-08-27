import PropTypes from 'prop-types';
import { Box, Typography, Breadcrumbs as MUIBreadcrumbs } from '@mui/material';

// ----------------------------------------------------------------------

DotSeparated.propTypes = {
  texts: PropTypes.array.isRequired,
};

export default function DotSeparated({ texts, ...other }) {
  const listDefault = texts.map((name, i) => (
    <Typography key={i} variant='body2' {...name}>
      {name?.text || name}
    </Typography>
  ));

  return (
    <MUIBreadcrumbs
      separator={
        <Box
          component='span'
          sx={{
            width: 4,
            height: 4,
            borderRadius: '50%',
            bgcolor: 'text.disabled',
          }}
        />
      }
      {...other}
    >
      {listDefault}
    </MUIBreadcrumbs>
  );
}
