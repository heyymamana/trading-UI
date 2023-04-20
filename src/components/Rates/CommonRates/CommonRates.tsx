import { Typography, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { CommonRate } from 'src/api/getCommonRates';
import CRate from './CRate';
import ParsingDataError from '@/components/ParsingDataError/ParsingDataError';

interface CommonRatesProps {
  commonRates: CommonRate[] | null;
}

const CommonRates = (props: CommonRatesProps) => {
  const { commonRates } = props;
  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.down('md'));
  const xsScreen = useMediaQuery('(max-width:700px)');

  return (
    <Box sx={{ p: mdScreen ? 1 : 3 }}>
      <Typography variant="h4">Common exchange rates:</Typography>
      <Box
        sx={{
          mt: 2,
          display: 'flex',
          flexWrap: mdScreen ? 'wrap' : 'nowrap',
          mx: mdScreen ? (xsScreen ? 0 : 12) : 0,
          justifyContent: 'space-around',
        }}
      >
        {commonRates ? (
          commonRates.map((common) => <CRate key={common.rate.currencyFromCode} common={common} />)
        ) : (
          <ParsingDataError />
        )}
      </Box>
    </Box>
  );
};

export default CommonRates;
