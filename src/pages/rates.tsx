import { CommonRate, getCommonRates } from '@/api/getCommonRates';
import { Box } from '@mui/material';
import CommonRates from 'src/components/Rates/CommonRates/CommonRates';
import RatesTable from 'src/components/Rates/RatesTable';

interface RatesProps {
  commonRates: CommonRate[] | null;
}

const Rates = (props: RatesProps) => {
  const { commonRates } = props;

  return (
    <Box sx={{ m: 2 }}>
      <CommonRates commonRates={commonRates} />
      <RatesTable />
    </Box>
  );
};

export async function getServerSideProps() {
  const commonRates = await getCommonRates();
  return {
    props: { commonRates },
  };
}

export default Rates;
