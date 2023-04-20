import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from '@mui/material/styles';
import { Box, Button, CircularProgress, Stack, TextField, Typography, useMediaQuery } from '@mui/material';
import routes from '@/routes';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authInProgress, setAuthInProgress] = useState(false);
  const [loginError, setLoginError] = useState('');

  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAuthInProgress(true);

    const res = await signIn('credentials', { redirect: false, username, password });
    if (res?.error) {
      setAuthInProgress(false);
      setLoginError(res.error);
      setPassword('');
    }
    if (res?.ok) router.push(routes.wallet);
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    mx: 4,
    p: mdScreen ? 3 : 4,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '10px',
    boxShadow: 24,
  };

  return (
    <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={formStyle} component="form" onSubmit={handleSubmit}>
        <Stack direction="row" alignItems="center">
          <Image alt="logo" src="/logo.svg" width={mdScreen ? 40 : 50} height={mdScreen ? 40 : 50} />
          <Typography variant={mdScreen ? 'h5' : 'h4'} textAlign="center" flexGrow={1} mr={mdScreen ? 2 : 0}>
            Login or create an account
          </Typography>
        </Stack>
        <Stack maxWidth="500px">
          <Typography mb={2} variant="body2" align="center">
            The app is a <strong>simulator</strong> only. Money and exchanges are not real. It is not possible to
            exchange in-app funds for real money.
          </Typography>
          <Typography variant="body1" align="center">
            To create new account you only need to pass <strong>username</strong> and <strong>password</strong>. At the
            start you will receive 100 000 PLN.
          </Typography>
        </Stack>
        {loginError ? (
          <Typography variant="body1" align="center" sx={{ color: '#d32f2f', fontSize: '1.3rem', fontWeight: '500' }}>
            {loginError}
          </Typography>
        ) : null}
        <TextField
          label="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={!!loginError}
        />
        <TextField
          label="Password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!loginError}
        />
        <Button variant="contained" type="submit" disabled={authInProgress} sx={{ mt: 2, height: '40px' }}>
          {authInProgress ? <CircularProgress size="1.6rem" color="primary" /> : 'Login / Create'}
        </Button>
      </Box>
    </Box>
  );
};

export default SignIn;
