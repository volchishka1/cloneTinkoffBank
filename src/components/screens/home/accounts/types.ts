export type TypeCurrency = 'RUB' | 'USD';
export type TypeName = 'Tinkoff Black' | 'All Airlines';

export interface IAccount {
  _id: string;
  userId: string;
  balance: number;
  cardNumber: string;
  currency: TypeCurrency;
  name: TypeName;
}
