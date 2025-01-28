import { useEffect } from 'react';

const useDarkMode = () => {
  useEffect(() => {
    document.body.classList.add('dark');
    return () => {
      document.body.classList.remove('dark');
    };
  }, []);
};

export default useDarkMode;
