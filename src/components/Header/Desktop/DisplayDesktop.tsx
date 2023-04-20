import { Toolbar } from '@mui/material';
import CurrencyingLogo from '../CurrencyingLogo';
import LoginButtons from './LoginButtons';
import HeaderButtons from './HeaderButtons';

const DisplayDesktop = () => {
  return (
    <Toolbar sx={{ py: 1, display: 'flex', justifyContent: 'space-between' }}>
      <CurrencyingLogo />
      <HeaderButtons />
      <LoginButtons />
    </Toolbar>
  );
};

export default DisplayDesktop;
