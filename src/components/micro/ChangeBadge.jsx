import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';

const ChangeBadge = ({ change, className, ...props }) => {
  if (change === 0) {
    return <></>;
  }

  return (
    <Chip
      color={change < 0 ? 'error' : 'success'}
      variant='soft'
      className={className}
      label={
        <>
          {change > 0 && '+'}
          {change}%
        </>
      }
      {...props}
    />
  );
};

ChangeBadge.propTypes = {
  change: PropTypes.number,
  className: PropTypes.string,
};

ChangeBadge.defaultProps = {
  change: 0,
  className: '',
};

export default ChangeBadge;
