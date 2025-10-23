
import React, { useState, useMemo } from 'react';
import type { CalculationResult, LoggedTransaction, Offer, PaymentInstrument, Merchant, SharedLimit } from './types';
import { instruments as allInstruments } from './data/instruments';
import { merchants as allMerchants } from './data/merchants';
import { offers as allOffers } from './data/offers';
import { sharedLimits } from './data/limits';
import TransactionForm from './components/TransactionForm';
import ResultsTable from './components/ResultsTable';

const getOfferDescription = (offer: Offer): string => {
    switch (offer.benefitType) {
        case 'percent': return `${offer.benefitValue * 100}% discount`;
        case 'cashback': return `${offer.benefitValue * 100}% cashback`;
        case 'points': return `${offer.benefitValue * 100}% in points`;
        case 'flat': return `₹${offer.benefitValue} flat off`;
        default: return 'Benefit';
    }
};

const calculateAllBenefits = (
  amount: number,
  merchantId: string,
  instruments: PaymentInstrument[],
  offers: Offer[],
  offerUsage: { [key: string]: number },
  limitUsage: { [key: string]: number },
  allSharedLimits: SharedLimit[],
): CalculationResult[] => {
  return instruments.map(instrument => {
    let applicableOffers = offers.filter(o => o.instrumentId === instrument.id && o.merchantId === merchantId);

    if (instrument.type.includes('UPI')) {
      const upiOffer = offers.find(o => o.instrumentId === instrument.id && o.merchantId === 'upi_generic');
      if (upiOffer && !applicableOffers.some(o => o.id === upiOffer.id)) {
        applicableOffers.push(upiOffer);
      }
    }

    const defaultResult = { 
        instrument, 
        benefit: 0, 
        bestOffer: null, 
        remainingLimit: Infinity, 
        totalLimit: 0,
        limitDescription: 'N/A',
    };

    if (amount <= 0 || !merchantId) {
        return { ...defaultResult, notes: ['Enter amount & merchant.'] };
    }

    if (applicableOffers.length === 0) {
        return { ...defaultResult, notes: ['No offer available.'] };
    }

    let bestBenefitForCard = 0;
    let bestOfferForCard: Offer | null = null;
    let mostRelevantOffer: Offer | null = null;
    let highestPotentialBenefit = -1;

    for (const offer of applicableOffers) {
      if (amount < (offer.minTxn || 0)) continue;

      let potentialBenefit = 0;
      switch (offer.benefitType) {
        case 'percent':
        case 'cashback':
        case 'points':
          potentialBenefit = amount * offer.benefitValue;
          break;
        case 'flat':
          potentialBenefit = offer.benefitValue;
          break;
      }
      
      if (potentialBenefit > highestPotentialBenefit) {
        highestPotentialBenefit = potentialBenefit;
        mostRelevantOffer = offer;
      }
      
      const usedSoFar = offer.limitGroupId ? (limitUsage[offer.limitGroupId] || 0) : (offerUsage[offer.id] || 0);
      const totalCap = offer.limitGroupId ? (allSharedLimits.find(l => l.id === offer.limitGroupId)?.cap || 0) : offer.monthlyCap;
      const remainingLimit = totalCap - usedSoFar;
      const actualBenefit = Math.min(potentialBenefit, Math.max(0, remainingLimit));
      
      if (actualBenefit > bestBenefitForCard) {
        bestBenefitForCard = actualBenefit;
        bestOfferForCard = offer;
      }
    }
    
    const finalOffer = bestOfferForCard || mostRelevantOffer;
    const notes: string[] = [];

    let remainingLimit = Infinity;
    let totalLimit = 0;
    let limitDescription = 'N/A';

    if (finalOffer) {
        notes.push(getOfferDescription(finalOffer));
        if (finalOffer.isStackable) notes.push('Stackable');
        if (finalOffer.minTxn) notes.push(`Min txn: ₹${finalOffer.minTxn}`);

        if (finalOffer.limitGroupId) {
            const limitGroup = allSharedLimits.find(l => l.id === finalOffer.limitGroupId);
            if (limitGroup) {
                totalLimit = limitGroup.cap;
                const used = limitUsage[limitGroup.id] || 0;
                remainingLimit = totalLimit - used;
                limitDescription = limitGroup.description;
            }
        } else {
            totalLimit = finalOffer.monthlyCap;
            const used = offerUsage[finalOffer.id] || 0;
            remainingLimit = totalLimit - used;
            limitDescription = 'Offer-specific limit';
        }

        if (totalLimit > 0 && remainingLimit <= 0) {
            notes.push('Monthly limit reached.');
        }

    } else {
        notes.push('No eligible offer.');
    }

    return {
      instrument,
      benefit: bestBenefitForCard,
      bestOffer: finalOffer,
      notes,
      remainingLimit,
      totalLimit,
      limitDescription,
    };
  });
};

const initialOfferUsage = allOffers.reduce((acc, offer) => {
    if (!offer.limitGroupId) { // Only track individual offers
        acc[offer.id] = 0;
    }
    return acc;
}, {} as { [key: string]: number });

const initialLimitUsage = sharedLimits.reduce((acc, limit) => {
    acc[limit.id] = 0;
    return acc;
}, {} as { [key: string]: number });


const App: React.FC = () => {
  const [transactionAmount, setTransactionAmount] = useState<number>(0);
  const [selectedMerchantId, setSelectedMerchantId] = useState<string>('');
  const [category, setCategory] = useState<string>('all');
  const [offerUsage, setOfferUsage] = useState<{ [key: string]: number }>(initialOfferUsage);
  const [limitUsage, setLimitUsage] = useState<{ [key: string]: number }>(initialLimitUsage);
  const [transactionLog, setTransactionLog] = useState<LoggedTransaction[]>([]);

  const calculationResults = useMemo(() => {
    return calculateAllBenefits(transactionAmount, selectedMerchantId, allInstruments, allOffers, offerUsage, limitUsage, sharedLimits);
  }, [transactionAmount, selectedMerchantId, offerUsage, limitUsage]);

  const bestResult = useMemo(() => {
    if (!calculationResults || calculationResults.length === 0) return null;
    return calculationResults.reduce((best, current) => (current.benefit > best.benefit ? current : best), calculationResults[0]);
  }, [calculationResults]);

  const handleLogTransaction = () => {
    if (!bestResult || !bestResult.bestOffer || bestResult.benefit <= 0) {
      alert("No valid transaction or benefit to log.");
      return;
    }

    const { bestOffer, benefit, instrument } = bestResult;

    if (bestOffer.limitGroupId) {
        setLimitUsage(prev => ({
            ...prev,
            [bestOffer.limitGroupId!]: (prev[bestOffer.limitGroupId!] || 0) + benefit,
        }));
    } else {
        setOfferUsage(prev => ({
            ...prev,
            [bestOffer.id]: (prev[bestOffer.id] || 0) + benefit,
        }));
    }

    const newLogEntry: LoggedTransaction = {
        id: new Date().toISOString(),
        date: new Date().toLocaleString(),
        amount: transactionAmount,
        merchantName: allMerchants.find(m => m.id === selectedMerchantId)?.name || 'Unknown',
        instrumentName: instrument.name,
        benefit: benefit,
        offerId: bestOffer.id
    };
    setTransactionLog(prev => [newLogEntry, ...prev]);
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all monthly limits and clear the transaction log?")) {
      setOfferUsage(initialOfferUsage);
      setLimitUsage(initialLimitUsage);
      setTransactionLog([]);
    }
  };

  return (
    <div className="min-h-screen container mx-auto p-4 md:p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
          PayChoice
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Personal Payment Comparison for Neha & Mayur
        </p>
      </header>

      <main>
        <TransactionForm
          amount={transactionAmount}
          setAmount={setTransactionAmount}
          selectedMerchantId={selectedMerchantId}
          setSelectedMerchantId={setSelectedMerchantId}
          merchants={allMerchants}
          category={category}
          setCategory={setCategory}
        />

        <ResultsTable results={calculationResults} />
        
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
            <button
                onClick={handleLogTransaction}
                disabled={!bestResult || bestResult.benefit <= 0}
                className="w-full md:w-auto px-8 py-3 font-semibold text-white bg-brand-primary rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
                Log Transaction
            </button>
            <button
                onClick={handleReset}
                className="w-full md:w-auto px-8 py-3 font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
            >
                Reset Monthly Limits
            </button>
        </div>

        {transactionLog.length > 0 && (
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Transaction Log</h2>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 max-h-60 overflow-y-auto">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {transactionLog.map(log => (
                            <li key={log.id} className="py-3 text-sm">
                                <span className="text-gray-500 dark:text-gray-400 mr-2">[{log.date}]</span>
                                <span>
                                    Used <strong>{log.instrumentName}</strong> for <strong>₹{log.amount}</strong> at <strong>{log.merchantName}</strong>, 
                                    earned <strong className="text-brand-secondary">₹{log.benefit.toFixed(2)}</strong> benefit.
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )}
      </main>

      <footer className="text-center mt-12 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} PayChoice. Made for smarter spending.</p>
      </footer>
    </div>
  );
};

export default App;