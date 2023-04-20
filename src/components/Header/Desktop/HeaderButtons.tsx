import { Box, Button } from '@mui/material';
import { headerLinks } from '../headerButtons';
import Link from 'next/link';
import { theme } from '../../../theme/theme';

const HeaderButtons = () => {
  const getMenuButtons = () => {
    return headerLinks.map(({ label, href }) => {
      return (
        <Button
          key={label}
          sx={{ mx: 1, color: theme.palette.text.primary }}
          {...{
            component: Link,
            href,
          }}
        >
          {label}
        </Button>
      );
    });
  };
  return <Box>{getMenuButtons()}</Box>;
};

export default HeaderButtons;
