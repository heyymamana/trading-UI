import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { theme } from '../../theme/theme';
import DisplayDesktop from './Desktop/DisplayDesktop';
import DisplayMobile from './Mobile/DisplayMobile';

const Header = () => {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const isMoblieView = () => {
      window.innerWidth < 900 ? setMobileView(true) : setMobileView(false);
    };
    isMoblieView();
    window.addEventListener('resize', isMoblieView);
    return () => {
      window.removeEventListener('resize', isMoblieView);
    };
  }, [mobileView]);

  return (
    <header>
      <Box sx={{ height: '64px', backgroundColor: theme.palette.background.paper }}>
        {mobileView ? <DisplayMobile /> : <DisplayDesktop />}
      </Box>
    </header>
  );
};

export default Header;
