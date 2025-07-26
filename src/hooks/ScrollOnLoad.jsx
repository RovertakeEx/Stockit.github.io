import { useEffect } from 'react';
import { activateSection } from '../data/utils/Nav';

const ScrollToSectionOnLoad = () => {
  useEffect(() => {
    const path = window.location.pathname.replace('/', '') || 'home';
    activateSection(path);
  }, []);

  return null;
};

export default ScrollToSectionOnLoad;