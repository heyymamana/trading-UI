import { getExchange } from '@/api/getExchange';
import { NextApiRequest, NextApiResponse } from 'next';
import { Currency } from 'types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const from = req.query.params?.[0];
  const to = req.query.params?.[1];

  if (!from || !to) {
    res.status(400).json({ message: 'Wrong query params' });
  } else {
    const response = await getExchange(from as Currency, to as Currency);
    response ? res.json({ data: response }) : res.status(502).json({ message: 'Error fetching data' });
  }
}
