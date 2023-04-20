import { Box, Button } from '@mui/material';
import useLoginLogoutBtn from '../hooks/useLoginLogoutBtn';

const LoginButtons = () => {
  const activeButton = useLoginLogoutBtn();

  return (
    <Box sx={{ mx: 2, justifySelf: 'flex-end' }}>
      <Button onClick={activeButton.onClick} variant="outlined">
        {activeButton.label}
      </Button>
    </Box>
  );
};

export default LoginButtons;
