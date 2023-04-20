import { Dispatch, SetStateAction } from 'react';
import { Drawer, MenuItem, Box, Divider, Button } from '@mui/material';
import Link from 'next/link';
import { headerLinks } from '../headerButtons';
import useLoginLogoutBtn from '../hooks/useLoginLogoutBtn';

interface props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileDrawer = ({ open, setOpen }: props) => {
  const activeButton = useLoginLogoutBtn();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const getDrawerButtons = () => {
    return headerLinks.map(({ label, href }) => {
      return (
        <Link
          key={label}
          {...{
            component: Link,
            href,
            style: { textDecoration: 'none' },
            onClick: handleDrawerClose,
          }}
        >
          <MenuItem sx={{ pr: 10, color: 'black' }}>{label}</MenuItem>
        </Link>
      );
    });
  };

  return (
    <Drawer
      {...{
        anchor: 'left',
        open: open,
        onClose: handleDrawerClose,
      }}
    >
      <Box sx={{ my: 2 }}>{getDrawerButtons()}</Box>
      <Divider />
      <Button sx={{ mt: 1, ml: 1, pr: 10 }} onClick={activeButton.onClick} endIcon={<activeButton.icon />}>
        {activeButton.label}
      </Button>
    </Drawer>
  );
};

export default MobileDrawer;
