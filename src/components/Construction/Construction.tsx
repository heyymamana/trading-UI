import { Stack, Typography } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

const Construction = () => {
  return (
    <Stack justifyContent="center" alignItems="center" gap={1} sx={{ height: '60vh' }}>
      <ConstructionIcon fontSize="large" />
      <Typography variant="h4">Under construction</Typography>
    </Stack>
  );
};

export default Construction;
