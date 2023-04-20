import { NextApiRequest, NextApiResponse } from 'next';
import { Currency, SPREAD } from 'types';
import { Response } from '@/api/typings';

const KEY = process.env.CURRENCY_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { currencyFrom } = req.query;
  const from = (currencyFrom as string[])[0];

  try {
    const response = await fetch(`https://api.getgeoapi.com/v2/currency/convert?api_key=${KEY}&from=${from}`);
    const data: Response = await response.json();

    const ratesArray = Object.entries(data.rates)
      .map((rate) => ({ currencyToCode: rate[0], info: rate[1] }))
      .filter((rate) => rate.currencyToCode in Currency);

    // Convert currencyCode to Currency enum
    const ratesEnumArray = ratesArray.map((rate) => {
      return {
        currencyFromCode: from,
        currencyFromName: data.base_currency_name,
        currencyToCode: rate.currencyToCode as Currency,
        currencyToName: rate.info.currency_name,
        sellRate: (parseFloat(rate.info.rate) + parseFloat(rate.info.rate) * SPREAD).toFixed(4),
        buyRate: (parseFloat(rate.info.rate) - parseFloat(rate.info.rate) * SPREAD).toFixed(4),
        rateNoSpread: parseFloat(rate.info.rate).toFixed(4),
      };
    });
    res.json({ data: ratesEnumArray });
  } catch {
    res.json({ message: 'Error fetching data' });
  }
}
