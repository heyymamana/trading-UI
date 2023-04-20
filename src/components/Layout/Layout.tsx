import React, { ReactElement } from 'react';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '@/theme/theme';
import Header from '../Header/Header';

interface props {
  children: ReactElement;
}

const Layout = ({ children }: props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;
