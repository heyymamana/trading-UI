import React, { useEffect, useState } from 'react';
import { Paper, Skeleton, Typography } from '@mui/material';
import { User } from 'types';
import { Stack } from '@mui/system';
import Link from 'next/link';
import { Rate } from '@/api/typings';

interface WalletTotalProps {
  user: User;
}

const WalletTotal = (props: WalletTotalProps) => {
  const { user } = props;

  const [totalBalance, setTotalBalance] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTotalBalance(0);

    (async () => {
      const baseCurrencyValue = Object.entries(user).find((c) => c[0] === user.baseCurrency)?.[1];

      const userCurrencies = Object.entries(user)
        .filter((e) => e[0] !== user.baseCurrency)
        .filter((e) => e[1] > 0);

      const converted = await Promise.all(
        userCurrencies.map(async (c) => {
          const response = await fetch(`/api/rates/exchange/${c[0]}/${user.baseCurrency}`);
          if (!response.ok) return setError(true);
          const { data }: { data: Rate } = await response.json();
          return c[1] * parseFloat(data.rateNoSpread);
        })
      );

      setTotalBalance(converted.reduce((sum, num) => sum + num, baseCurrencyValue));
    })();
  }, [user]);

  if (error)
    return (
      <Paper elevation={5} sx={{ p: 3, pb: 2, maxWidth: '350px' }}>
        <Typography variant="h5">Hi {user.username},</Typography>
        <Typography variant="body1">There has been an error calculating your total balance.</Typography>
      </Paper>
    );

  return (
    <Paper elevation={5} sx={{ p: 3, pb: 2, maxWidth: '350px' }}>
      <Typography variant="h5">Hi {user.username},</Typography>
      <Typography variant="body1">
        Your total balance in conversion to your <Link href={'/'}>base currency</Link>:
      </Typography>
      <Stack direction="row" gap={1} mt={1}>
        <Typography variant="h4">{totalBalance ? totalBalance.toFixed(2) : <Skeleton width={150} />}</Typography>
        <p>{totalBalance ? user.baseCurrency : <Skeleton width={24} />}</p>
      </Stack>
    </Paper>
  );
};

export default WalletTotal;
