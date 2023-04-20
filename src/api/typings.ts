import { Currency } from 'types';

export interface Response {
  base_currency_code: string;
  base_currency_name: string;
  amount: string;
  updated_date: string;
  rates: { string: { currency_name: string; rate: string; rate_for_amount: string } };
}

export interface Rate {
  currencyToCode: Currency;
  currencyToName: string;
  currencyFromCode: Currency;
  currencyFromName: string;
  sellRate: string;
  buyRate: string;
  rateNoSpread: string;
}
