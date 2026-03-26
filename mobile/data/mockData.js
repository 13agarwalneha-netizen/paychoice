export const products = [
  {
    id: 'vault-1',
    productType: 'vault',
    title: 'Vault',
    balance: '$8,420.15',
    maskedCardNumber: '•••• 1408',
    subtext: 'Balance',
    actions: ['Add Money', 'Pay', 'More'],
  },
  {
    id: 'booster-1',
    productType: 'booster',
    title: 'Booster',
    available: '$11,250.00',
    maskedCardNumber: '•••• 4021',
    subtext: 'Available',
    paymentDue: 'Apr 04',
    minDue: '$120.00',
    autopayEnabled: true,
    actions: ['Pay Now'],
  },
  {
    id: 'upfront-1',
    productType: 'upfront',
    title: 'Upfront',
    balance: '$1,430.22',
    maskedCardNumber: '•••• 8842',
    subtext: 'Current Balance',
    paymentDue: 'Apr 07',
    actions: ['Pay Now'],
  },
];

export const merchants = [
  { id: 'm-1', name: 'Amazon', amount: '$900', txns: 12 },
  { id: 'm-2', name: 'Shell', amount: '$870', txns: 9 },
  { id: 'm-3', name: 'Starbucks', amount: '$600', txns: 6 },
  { id: 'm-4', name: 'Target', amount: '$420', txns: 5 },
];

export const transactions = [
  { id: 't-1', title: 'Payment Received', timestamp: '1m ago', amount: '+$450.00', type: 'credit' },
  { id: 't-2', title: 'Cash Advance', timestamp: '23m ago', amount: '-$150.00', type: 'debit' },
  { id: 't-3', title: 'Card Payment', timestamp: '2h ago', amount: '-$72.49', type: 'debit' },
  { id: 't-4', title: 'Payment Received', timestamp: '1d ago', amount: '+$200.00', type: 'credit' },
];
