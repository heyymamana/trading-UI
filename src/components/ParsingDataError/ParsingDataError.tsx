import { Box, Typography } from '@mui/material';
import React from 'react';

const ParsingDataError = () => {
  return (
    <Box sx={{ my: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography>Error parsing data</Typography>
    </Box>
  );
};

export default ParsingDataError;
