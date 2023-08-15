import { useState, useEffect } from 'react';
import { theme } from '../config';
const { settings } = theme;

const getIsMobile = () => window.innerWidth <= settings.mobile;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return isMobile;
};
