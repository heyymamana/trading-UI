import { Box, Grid } from '@mui/material';
import { User } from 'types';
import ParsingDataError from '@/components/ParsingDataError/ParsingDataError';
import WalletTotal from '@/components/Wallet/WalletTotal';
import { getToken } from 'next-auth/jwt';

import { NextRequest } from 'next/server';

interface WalletProps {
  user?: User;
}

const Wallet = (props: WalletProps) => {
  const { user } = props;

  if (!user) return <ParsingDataError />;

  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <WalletTotal user={user} />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Box>
  );
};

export default Wallet;

export async function getServerSideProps(context: { req: NextRequest }) {
  const token = await getToken({ req: context.req });

  return {
    props: { user: token?.user },
  };
}
