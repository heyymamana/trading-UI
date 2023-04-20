import styles from '@/styles/Landing.module.css';
import { Box, Button } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { theme } from '../theme/theme';
import routes from '../routes';
import card from '../../public/img/Card.svg';

const Landing = () => {
  return (
    <>
      <Head>
        <title>Currencying</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Box className={styles.landing} sx={{ backgroundColor: theme.palette.background.paper }}>
        <Box className={styles.content}>
          <Image className={styles.card} src={card} alt="debit card" />
          <Box component="h1" className={styles.heading}>
            Currency <br />
            <span className={styles.trading}>trading</span> <br />
            <span className={styles.simulator}>simulator</span>
          </Box>
        </Box>
        <Box className={styles.buttonContainer}>
          <Link href={routes.rates} {...{ style: { textDecoration: 'none' } }}>
            <Button
              variant="contained"
              size="large"
              className={styles.button}
              sx={{ px: 4, backgroundColor: 'black', color: 'white' }}
            >
              Check rates
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Landing;
