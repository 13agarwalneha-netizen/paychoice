
import { Offer } from '../types';

export const offers: Offer[] = [
  // HDFC Infinia
  { id: 'offer_infinia_flights', instrumentId: 'infinia', merchantId: 'makemytrip', benefitType: 'points', benefitValue: 0.05, isStackable: true, monthlyCap: 15000, minTxn: 3000, limitGroupId: 'infinia_points_15k' },
  { id: 'offer_infinia_flights_musafir', instrumentId: 'infinia', merchantId: 'musafir', benefitType: 'points', benefitValue: 0.05, isStackable: true, monthlyCap: 15000, minTxn: 3000, limitGroupId: 'infinia_points_15k' },
  { id: 'offer_infinia_hotels', instrumentId: 'infinia', merchantId: 'zoomcar', benefitType: 'points', benefitValue: 0.1, isStackable: true, monthlyCap: 15000, minTxn: 3000, limitGroupId: 'infinia_points_15k' },
  { id: 'offer_infinia_train', instrumentId: 'infinia', merchantId: 'confirmticket', benefitType: 'points', benefitValue: 0.03, isStackable: true, monthlyCap: 15000, minTxn: 500, limitGroupId: 'infinia_points_15k' },
  { id: 'offer_infinia_bus', instrumentId: 'infinia', merchantId: 'redbus', benefitType: 'points', benefitValue: 0.05, isStackable: true, monthlyCap: 15000, minTxn: 500, limitGroupId: 'infinia_points_15k' },
  { id: 'offer_infinia_myntra', instrumentId: 'infinia', merchantId: 'myntra', benefitType: 'points', benefitValue: 0.05, isStackable: true, monthlyCap: 15000, minTxn: 3000, limitGroupId: 'infinia_points_15k' },
  { id: 'offer_infinia_nykaa', instrumentId: 'infinia', merchantId: 'nykaa', benefitType: 'points', benefitValue: 0.05, isStackable: true, monthlyCap: 15000, minTxn: 3000, limitGroupId: 'infinia_points_15k' },
  { id: 'offer_infinia_jockey', instrumentId: 'infinia', merchantId: 'jockey', benefitType: 'points', benefitValue: 0.1, isStackable: true, monthlyCap: 15000, minTxn: 3000, limitGroupId: 'infinia_points_15k' },
  { id: 'offer_infinia_croma', instrumentId: 'infinia', merchantId: 'croma', benefitType: 'flat', benefitValue: 1000, isStackable: false, monthlyCap: 1000, minTxn: 10000 },
  { id: 'offer_infinia_swiggy', instrumentId: 'infinia', merchantId: 'swiggy_dineout', benefitType: 'percent', benefitValue: 0.1, isStackable: false, monthlyCap: 1000, minTxn: 500 },
  { id: 'offer_infinia_itc', instrumentId: 'infinia', merchantId: 'itc_hotels', benefitType: 'flat', benefitValue: 0, isStackable: false, monthlyCap: 0, minTxn: 3000 },
  { id: 'offer_infinia_apple_points', instrumentId: 'infinia', merchantId: 'apple_istore', benefitType: 'points', benefitValue: 0.05, isStackable: true, monthlyCap: 15000, minTxn: 3000, limitGroupId: 'infinia_points_15k' },
  { id: 'offer_infinia_apple_discount', instrumentId: 'infinia', merchantId: 'apple_istore', benefitType: 'flat', benefitValue: 19830, isStackable: false, monthlyCap: 19830, minTxn: 79900 },
  { id: 'offer_infinia_amazon_voucher', instrumentId: 'infinia', merchantId: 'amazon_pay', benefitType: 'points', benefitValue: 0.165, isStackable: true, monthlyCap: 15000, minTxn: 0, limitGroupId: 'infinia_points_15k' },
  { id: 'offer_infinia_grocery_blinkit', instrumentId: 'infinia', merchantId: 'blinkit', benefitType: 'points', benefitValue: 0.05, isStackable: true, monthlyCap: 15000, minTxn: 3000, limitGroupId: 'infinia_points_15k' },
  { id: 'offer_infinia_grocery_bigbazaar', instrumentId: 'infinia', merchantId: 'big_bazaar', benefitType: 'points', benefitValue: 0.05, isStackable: true, monthlyCap: 15000, minTxn: 3000, limitGroupId: 'infinia_points_15k' },
  { id: 'offer_infinia_sports_decathlon', instrumentId: 'infinia', merchantId: 'decathlon', benefitType: 'points', benefitValue: 0.05, isStackable: true, monthlyCap: 15000, minTxn: 3000, limitGroupId: 'infinia_points_15k' },
  { id: 'offer_infinia_health_curefit', instrumentId: 'infinia', merchantId: 'curefit', benefitType: 'points', benefitValue: 0.05, isStackable: true, monthlyCap: 15000, minTxn: 3000, limitGroupId: 'infinia_points_15k' },
  { id: 'offer_infinia_health_callhealth', instrumentId: 'infinia', merchantId: 'callhealth', benefitType: 'points', benefitValue: 0.05, isStackable: true, monthlyCap: 15000, minTxn: 3000, limitGroupId: 'infinia_points_15k' },
  { id: 'offer_infinia_health_seniority', instrumentId: 'infinia', merchantId: 'seniority', benefitType: 'points', benefitValue: 0.05, isStackable: true, monthlyCap: 15000, minTxn: 3000, limitGroupId: 'infinia_points_15k' },
  { id: 'offer_infinia_smartbuy_flights', instrumentId: 'infinia', merchantId: 'smartbuy_flights', benefitType: 'points', benefitValue: 0.05, isStackable: true, monthlyCap: 15000, minTxn: 0, limitGroupId: 'infinia_points_15k' },
  { id: 'offer_infinia_smartbuy_hotels', instrumentId: 'infinia', merchantId: 'smartbuy_hotels', benefitType: 'points', benefitValue: 0.05, isStackable: true, monthlyCap: 15000, minTxn: 0, limitGroupId: 'infinia_points_15k' },
  { id: 'offer_infinia_smartbuy_istore', instrumentId: 'infinia', merchantId: 'smartbuy_istore', benefitType: 'points', benefitValue: 0.05, isStackable: true, monthlyCap: 15000, minTxn: 0, limitGroupId: 'infinia_points_15k' },
  // Tata Neu RuPay
  { id: 'offer_tata_neu_bigbasket', instrumentId: 'tata_neu', merchantId: 'bigbasket', benefitType: 'points', benefitValue: 0.05, isStackable: true, monthlyCap: 15000 },
  { id: 'offer_tata_neu_croma', instrumentId: 'tata_neu', merchantId: 'croma', benefitType: 'points', benefitValue: 0.05, isStackable: true, monthlyCap: 15000 },
  { id: 'offer_tata_neu_tanishq', instrumentId: 'tata_neu', merchantId: 'tanishq', benefitType: 'points', benefitValue: 0.05, isStackable: true, monthlyCap: 15000 },
  { id: 'offer_tata_neu_titan', instrumentId: 'tata_neu', merchantId: 'titan', benefitType: 'points', benefitValue: 0.05, isStackable: true, monthlyCap: 15000 },
  { id: 'offer_tata_neu_westside', instrumentId: 'tata_neu', merchantId: 'westside', benefitType: 'points', benefitValue: 0.05, isStackable: true, monthlyCap: 15000 },
  { id: 'offer_tata_neu_tatacliq', instrumentId: 'tata_neu', merchantId: 'tatacliq', benefitType: 'points', benefitValue: 0.05, isStackable: true, monthlyCap: 15000 },
  { id: 'offer_tata_neu_tata1mg', instrumentId: 'tata_neu', merchantId: 'tata1mg', benefitType: 'points', benefitValue: 0.05, isStackable: true, monthlyCap: 15000 },
  { id: 'offer_tata_neu_airasia', instrumentId: 'tata_neu', merchantId: 'airasia', benefitType: 'points', benefitValue: 0.05, isStackable: true, monthlyCap: 15000 },
  { id: 'offer_tata_neu_upi', instrumentId: 'tata_neu', merchantId: 'upi_generic', benefitType: 'points', benefitValue: 0.015, isStackable: true, monthlyCap: 500 },
  // Swiggy HDFC
  { id: 'offer_swiggy_food', instrumentId: 'swiggy_hdfc', merchantId: 'swiggy_delivery', benefitType: 'cashback', benefitValue: 0.1, isStackable: true, monthlyCap: 1500, limitGroupId: 'swiggy_cashback_1500' },
  { id: 'offer_swiggy_instamart', instrumentId: 'swiggy_hdfc', merchantId: 'swiggy_instamart', benefitType: 'cashback', benefitValue: 0.1, isStackable: true, monthlyCap: 1500, limitGroupId: 'swiggy_cashback_1500' },
  { id: 'offer_swiggy_dineout', instrumentId: 'swiggy_hdfc', merchantId: 'swiggy_dineout', benefitType: 'cashback', benefitValue: 0.1, isStackable: true, monthlyCap: 1500, limitGroupId: 'swiggy_cashback_1500' },
  { id: 'offer_swiggy_genie', instrumentId: 'swiggy_hdfc', merchantId: 'swiggy_genie', benefitType: 'cashback', benefitValue: 0.1, isStackable: true, monthlyCap: 1500, limitGroupId: 'swiggy_cashback_1500' },
  // Kiwi RuPay
  { id: 'offer_kiwi_upi', instrumentId: 'kiwi_rupay', merchantId: 'upi_generic', benefitType: 'cashback', benefitValue: 0.05, isStackable: true, monthlyCap: 500, limitGroupId: 'kiwi_cashback_500' },
  { id: 'offer_kiwi_amazonpay', instrumentId: 'kiwi_rupay', merchantId: 'amazon_pay', benefitType: 'cashback', benefitValue: 0.05, isStackable: true, monthlyCap: 500, limitGroupId: 'kiwi_cashback_500' },
  { id: 'offer_kiwi_phonepe', instrumentId: 'kiwi_rupay', merchantId: 'phonepe', benefitType: 'cashback', benefitValue: 0.05, isStackable: true, monthlyCap: 500, limitGroupId: 'kiwi_cashback_500' },
  { id: 'offer_kiwi_googlepay', instrumentId: 'kiwi_rupay', merchantId: 'googlepay', benefitType: 'cashback', benefitValue: 0.05, isStackable: true, monthlyCap: 500, limitGroupId: 'kiwi_cashback_500' },
];
