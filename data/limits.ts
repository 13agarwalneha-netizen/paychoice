import { SharedLimit } from '../types';

export const sharedLimits: SharedLimit[] = [
  { 
    id: 'infinia_points_15k', 
    cap: 15000, 
    description: 'Shared Infinia Points Cap' 
  },
  {
    id: 'swiggy_cashback_1500',
    cap: 1500,
    description: 'Shared Swiggy Card Cashback'
  },
  {
    id: 'kiwi_cashback_500',
    cap: 500,
    description: 'Shared Kiwi Card Cashback'
  }
];
