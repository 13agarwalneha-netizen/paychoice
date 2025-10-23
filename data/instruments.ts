
import { PaymentInstrument } from '../types';

export const instruments: PaymentInstrument[] = [
  {
    id: 'infinia',
    name: 'HDFC Infinia',
    owner: 'Mayur',
    type: 'credit_card',
    last4: '1111',
    pointsToCashRate: 1.0, // Assuming 1 point = 1 Rupee for simplicity
  },
  {
    id: 'tata_neu',
    name: 'Tata Neu RuPay CC',
    owner: 'Neha',
    type: 'credit_card/UPI',
    last4: '2222',
    pointsToCashRate: 1.0,
  },
  {
    id: 'swiggy_hdfc',
    name: 'Swiggy HDFC CC',
    owner: 'Mayur',
    type: 'credit_card',
    last4: '3333',
    pointsToCashRate: 1.0,
  },
  {
    id: 'kiwi_rupay',
    name: 'Kiwi RuPay CC',
    owner: 'Mayur',
    type: 'credit_card/UPI',
    last4: '4444',
    pointsToCashRate: 1.0,
  },
];
