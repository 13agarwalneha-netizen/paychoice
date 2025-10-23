
export type Owner = 'Neha' | 'Mayur';
export type InstrumentType = 'credit_card' | 'credit_card/UPI';
export type BenefitType = 'points' | 'flat' | 'percent' | 'cashback';
export type MerchantCategory = 'travel' | 'train' | 'bus' | 'e-commerce' | 'electronics' | 'dining' | 'hotel_stay' | 'gift_voucher' | 'grocery' | 'sports' | 'health' | 'jewelry' | 'watches' | 'fashion' | 'pharmacy' | 'food_delivery' | 'grocery_delivery' | 'delivery_services' | 'payments' | 'e-wallet';

export interface PaymentInstrument {
  id: string;
  name: string;
  owner: Owner;
  type: InstrumentType;
  last4: string;
  pointsToCashRate: number;
}

export interface Merchant {
  id: string;
  name: string;
  primary_category: MerchantCategory;
}

export interface Offer {
  id: string;
  instrumentId: string;
  merchantId: string;
  benefitType: BenefitType;
  benefitValue: number;
  isStackable: boolean;
  monthlyCap: number;
  minTxn?: number;
  limitGroupId?: string; // New field for shared limits
}

export interface SharedLimit {
  id: string;
  cap: number;
  description: string;
}

export interface CalculationResult {
  instrument: PaymentInstrument;
  benefit: number;
  bestOffer: Offer | null;
  notes: string[];
  // New detailed fields for displaying limit status
  remainingLimit: number;
  totalLimit: number;
  limitDescription: string;
}

export interface LoggedTransaction {
  id: string;
  date: string;
  amount: number;
  merchantName: string;
  instrumentName: string;
  benefit: number;
  offerId: string;
}