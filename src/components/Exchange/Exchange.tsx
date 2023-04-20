import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Paper, Select, MenuItem, TextField, FormControl, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import {Currency} from 'types';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(10),
  textAlign: 'center',
}));

const Exchange = () => {
  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex' }}>
                <FormControl hiddenLabel variant="filled" sx={{ minWidth: 100 }}>
                  <Select variant="filled" value={Currency.PLN} onChange={() => {}}>
                    <MenuItem value={Currency.PLN}>{Currency.PLN.toUpperCase()}</MenuItem>
                    <MenuItem value={Currency.USD}>{Currency.USD.toUpperCase()}</MenuItem>
                    <MenuItem value={Currency.EUR}>{Currency.EUR.toUpperCase()}</MenuItem>
                    <MenuItem value={Currency.CHF}>{Currency.CHF.toUpperCase()}</MenuItem>
                  </Select>
                </FormControl>
                <TextField hiddenLabel variant="filled" />
              </Box>
              <ArrowForwardIcon />
              <Box sx={{ display: 'flex' }}>
                <FormControl hiddenLabel variant="filled" sx={{ minWidth: 100 }}>
                  <Select variant="filled" value={Currency.USD} onChange={() => {}}>
                    <MenuItem value={Currency.PLN}>{Currency.PLN.toUpperCase()}</MenuItem>
                    <MenuItem value={Currency.USD}>{Currency.USD.toUpperCase()}</MenuItem>
                    <MenuItem value={Currency.EUR}>{Currency.EUR.toUpperCase()}</MenuItem>
                    <MenuItem value={Currency.CHF}>{Currency.CHF.toUpperCase()}</MenuItem>
                  </Select>
                </FormControl>
                <TextField hiddenLabel variant="filled" />
              </Box>
              <Button variant="contained" endIcon={<DoubleArrowIcon />} sx={{ px: 6, py: 2 }}>
                Wymień
              </Button>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Exchange;
