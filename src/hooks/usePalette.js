import { useState, useEffect } from 'react';
// import { useSelector } from "react-redux";

// import getCSSVariable from 'helpers/getCSSVariable';
// getCSSVariable('--bs-chart-gray-300')
import PALETTE from '../theme/palette';



const usePalette = () => {
  // const settings = useSelector(state => state.settings.value);

  const settings = { dark: false }

  const [palette, setPalette] = useState(PALETTE.light);

  useEffect(() => {
    setPalette(settings.dark ? PALETTE.dark : PALETTE.light);
  }, [settings.dark]);

  return palette;
};

export default usePalette;
