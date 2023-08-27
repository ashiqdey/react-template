import { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import usePalette from '../../hooks/usePalette';

export default function CircularProgress({
  percents,
  size,
  label,
  baseBorderWidth,
  borderWidth,
  baseBorderColor,
  borderColor,
  strokeLinecap,
  className,
  radius,
}) {
  const palette = usePalette();
  const classes = classNames('circle-progress p-r', className);

  const [value, setValue] = useState([]);
  const [colors, setColors] = useState([]);
  const [borderWidthArr, setBorderWidthArr] = useState([]);

  useEffect(() => {
    if (percents && borderColor) {
      // make arrayof border widths
      if (Array.isArray(borderWidth)) {
        setBorderWidthArr([...borderWidth]);
      } else {
        setBorderWidthArr([borderWidth]);
      }

      let _value = [];
      // make array of percents
      if (Array.isArray(percents)) {
        _value = percents;
      } else {
        _value = [percents];
      }

      // make array of colors
      if (Array.isArray(borderColor) && borderColor.length > 0) {
        let additionalColors = [];
        if (borderColor.length < _value.length) {
          for (let i = 0; i < _value.length - borderColor.length; i++) {
            additionalColors.push(borderColor[i % borderColor.length]);
          }
        }
        setColors([...borderColor, ...additionalColors]);
      } else if (typeof borderColor === 'string' && borderColor.length > 3) {
        setColors(Array(_value.length).fill(borderColor));
      } else {
        setColors(Array(_value.length).fill(palette.primary.main));
      }
      setValue(_value);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [borderWidth, percents, borderColor]);

  return (
    <Box
      className={classes}
      sx={{
        width: size,
        height: size,
        fontSize: size / 7 || 16,
      }}
    >
      <svg viewBox='25 25 50 50' className='w-100 of-h br-50 rotate--90'>
        <circle
          className='path'
          fill='none'
          stroke={baseBorderColor || palette.grey['300']}
          strokeWidth={baseBorderWidth}
          r={radius}
          cx='50'
          cy='50'
        />

        {value.map((percent, i) => (
          <circle
            key={i}
            className='path percent'
            fill='none'
            stroke={colors[i] || palette.grey['600']}
            strokeDasharray={`${(126 / 100) * percent},126`}
            strokeDashoffset='0'
            strokeWidth={borderWidthArr[i] || borderWidthArr[0]}
            strokeLinecap={strokeLinecap}
            r={radius}
            cx='50'
            cy='50'
            style={{ transition: '0.8s' }}
          />
        ))}
      </svg>
      {label && (
        <span className='p-a text-gray-500 t-50 l-50 tt--50'>
          {label === true ? `${value[0]}%` : label}
        </span>
      )}
    </Box>
  );
}

CircularProgress.propTypes = {
  percents: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number,
  ]),

  baseBorderWidth: PropTypes.number,
  baseBorderColor: PropTypes.string,

  borderWidth: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number,
  ]),
  borderColor: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),

  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
  strokeLinecap: PropTypes.string,
  className: PropTypes.string,
  radius: PropTypes.number,
};

CircularProgress.defaultProps = {
  percents: [68.4], // percentage of each arc, consider sorting in descending order

  baseBorderWidth: 5,
  baseBorderColor: null,

  borderWidth: [5], // array of border width for each arc
  borderColor: [], // array of colors for each arc

  size: 70, // height and width
  label: false,
  strokeLinecap: 'round',
  className: '',
  radius: 20,
};
