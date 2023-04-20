import { signIn, signOut } from 'next-auth/react';
import routes from '../../routes';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

export const headerLinks = [
  { label: 'Home', href: routes.root },
  { label: 'Rates', href: routes.rates },
  { label: 'Wallet', href: routes.wallet },
  { label: 'Exchange', href: routes.exchange },
];

export const loginButtons = {
  login: { label: 'Login', onClick: () => signIn(), icon: LoginIcon },
  logout: { label: 'Logout', onClick: () => signOut(), icon: LogoutIcon },
};
