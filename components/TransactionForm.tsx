import React from 'react';
import { Merchant, MerchantCategory } from '../types';

interface TransactionFormProps {
  amount: number;
  setAmount: (amount: number) => void;
  selectedMerchantId: string;
  setSelectedMerchantId: (id: string) => void;
  merchants: Merchant[];
  category: string;
  setCategory: (category: string) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({
  amount,
  setAmount,
  selectedMerchantId,
  setSelectedMerchantId,
  merchants,
  category,
  setCategory
}) => {
  const categories = [...new Set(merchants.map(m => m.primary_category))].sort();
  const filteredMerchants = category === 'all' ? merchants : merchants.filter(m => m.primary_category === category);

  const merchantOptions = filteredMerchants.map(merchant => (
    <option key={merchant.id} value={merchant.id}>{merchant.name}</option>
  ));

  const groupedMerchants = merchants.reduce((acc, merchant) => {
    const category = merchant.primary_category;
    if (!acc[category]) {
        acc[category] = [];
    }
    acc[category].push(merchant);
    return acc;
  }, {} as Record<MerchantCategory, Merchant[]>);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Transaction Amount (₹)
          </label>
          <div className="mt-1">
            <input
              type="number"
              id="amount"
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-brand-primary focus:border-brand-primary"
              placeholder="e.g., 5000"
              value={amount || ''}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
        </div>

        <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Filter by Category</label>
            <select
                id="category"
                value={category}
                onChange={(e) => {
                    setCategory(e.target.value);
                    setSelectedMerchantId(''); // Reset merchant on category change
                }}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm rounded-md bg-gray-50 dark:bg-gray-700"
            >
                <option value="all">All Categories</option>
                {categories.map(cat => <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1).replace(/_/g, ' ')}</option>)}
            </select>
        </div>

        <div>
          <label htmlFor="merchant" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Merchant
          </label>
          <select
            id="merchant"
            value={selectedMerchantId}
            onChange={(e) => setSelectedMerchantId(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm rounded-md bg-gray-50 dark:bg-gray-700"
            disabled={!category || filteredMerchants.length === 0}
          >
            <option value="">Select a Merchant</option>
            {category === 'all' ? (
                // Fix: Cast keys to MerchantCategory[] for proper type inference.
                (Object.keys(groupedMerchants) as MerchantCategory[]).sort().map(cat => (
                    <optgroup key={cat} label={cat.charAt(0).toUpperCase() + cat.slice(1).replace(/_/g, ' ')}>
                        {groupedMerchants[cat].map(merchant => (
                            <option key={merchant.id} value={merchant.id}>{merchant.name}</option>
                        ))}
                    </optgroup>
                ))
            ) : (
                merchantOptions
            )}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TransactionForm;