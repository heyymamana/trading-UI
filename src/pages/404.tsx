import { Stack, Typography } from '@mui/material';

const ErrorPage = () => {
  return (
    <Stack justifyContent="center" alignItems="center" gap={1} sx={{ height: '60vh' }}>
      <Typography variant="h3">404</Typography>
      <Typography variant="h5">Something went wrong</Typography>
    </Stack>
  );
};

export default ErrorPage;
