import { Currency, SPREAD } from 'types';
import { Rate, Response } from './typings';

const KEY = process.env.CURRENCY_API_KEY;

export const getExchange = async (from: Currency, to: Currency, amount: number = 1): Promise<Rate | null> => {
  const response = await fetch(
    `https://api.getgeoapi.com/v2/currency/convert?api_key=${KEY}&from=${from}&to=${to}&amount=${amount}`
  );
  if (!response.ok) return null;

  const data: Response = await response.json();
  const rate = { currencyCode: Object.entries(data.rates)[0][0], info: Object.entries(data.rates)[0][1] };

  return {
    currencyFromCode: from,
    currencyFromName: data.base_currency_name,
    currencyToCode: rate.currencyCode as Currency,
    currencyToName: rate.info.currency_name,
    sellRate: (parseFloat(rate.info.rate) + parseFloat(rate.info.rate) * SPREAD).toFixed(4),
    buyRate: (parseFloat(rate.info.rate) - parseFloat(rate.info.rate) * SPREAD).toFixed(4),
    rateNoSpread: parseFloat(rate.info.rate).toFixed(4),
  };
};
