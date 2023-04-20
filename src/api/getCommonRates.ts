import {Currency} from 'types';
import { getExchange } from './getExchange';
import { Rate } from './typings';
import usdplnIcon from 'public/img/usd-pln.svg';
import eurplnIcon from 'public/img/eur-pln.svg';
import gbpplnIcon from 'public/img/gbp-pln.svg';
import chfplnIcon from 'public/img/chf-pln.svg';

export interface CommonRate {
  rate: Rate;
  icon: string;
}

export const getCommonRates = async () => {
  const commonUSD = getExchange(Currency.USD, Currency.PLN);
  const commonEUR = getExchange(Currency.EUR, Currency.PLN);
  const commonCHF = getExchange(Currency.CHF, Currency.PLN);
  const commonGBP = getExchange(Currency.GBP, Currency.PLN);

  // Order ot the arrays is important here, keep both arrays in the same order Szymon
  const iconArray = [usdplnIcon, eurplnIcon, chfplnIcon, gbpplnIcon];
  return Promise.all([commonUSD, commonEUR, commonCHF, commonGBP]).then((values) => {
    if (values.some((value) => !value)) return null;
    return [
      { rate: values[0], icon: iconArray[0] },
      { rate: values[1], icon: iconArray[1] },
      { rate: values[2], icon: iconArray[2] },
      { rate: values[3], icon: iconArray[3] },
    ];
  });
};
