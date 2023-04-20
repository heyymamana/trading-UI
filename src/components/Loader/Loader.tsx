import { CircularProgress, Container } from '@mui/material';

const Loader = () => {
  return (
    <Container fixed sx={{ my: 3, display: 'flex', justifyContent: 'center' }}>
      <CircularProgress color="primary" />
    </Container>
  );
};

export default Loader;
