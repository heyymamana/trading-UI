import { Paper, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { Box } from '@mui/system';
import { Rate } from 'src/api/typings';

type CRateProps = { common: { rate: Rate; icon: string } };

const CRate = ({ common }: CRateProps) => {
  const mdScreen = useMediaQuery('(max-width:985px)');

  return (
    <Paper elevation={5} sx={{ m: 1, maxWidth: '240px', minWidth: '205px', flexGrow: 1, py: 1, px: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Image src={common.icon} alt="logo" style={{ width: mdScreen ? '60px' : '73px', height: 'auto' }} />
        <Typography variant="h6">{common.rate.currencyFromCode} / PLN</Typography>
      </Box>

      <Typography variant="subtitle1" sx={{ my: 1, mx: 3, display: 'flex', justifyContent: 'space-between' }}>
        Buy <strong>{common.rate.buyRate}</strong>
      </Typography>

      <Typography variant="subtitle1" sx={{ my: 1, mx: 3, display: 'flex', justifyContent: 'space-between' }}>
        Sell <strong>{common.rate.sellRate}</strong>
      </Typography>
    </Paper>
  );
};

export default CRate;
