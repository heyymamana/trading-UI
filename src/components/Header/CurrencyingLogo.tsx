import { Box } from '@mui/material';
import routes from '../../routes';

const CurrencyingLogo = () => {
  return (
    <a href={routes.root}>
      <Box component="img" height="50px" sx={{ mr: 3 }} alt="logo" src="/currencying.svg" />
    </a>
  );
};

export default CurrencyingLogo;
