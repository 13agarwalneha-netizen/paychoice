
import React from 'react';
import { CalculationResult } from '../types';
import { CreditCardIcon, InfoIcon, UserIcon, TrophyIcon } from './icons';
import Tooltip from './Tooltip';

interface ResultsTableProps {
  results: CalculationResult[];
}

const ResultsTable: React.FC<ResultsTableProps> = ({ results }) => {
  const bestBenefit = Math.max(...results.map(r => r.benefit));
  const formatCurrency = (value: number) => `₹${value.toFixed(2)}`;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mt-8">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Payment Instrument
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Benefit
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Offer Limit (Monthly)
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Notes
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {results.map((result, index) => {
              const isBest = result.benefit > 0 && result.benefit === bestBenefit;
              const { remainingLimit, totalLimit, limitDescription } = result;

              return (
                <tr key={result.instrument.id} className={isBest ? 'bg-green-100 dark:bg-green-900/50' : ''}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                       <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${result.instrument.owner === 'Neha' ? 'bg-pink-500' : 'bg-blue-500'}`}>
                         <UserIcon className="h-6 w-6 text-white"/>
                       </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{result.instrument.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {result.instrument.owner} &bull; **** {result.instrument.last4}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-lg font-bold">
                        <span className={isBest ? 'text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-white'}>
                            {formatCurrency(result.benefit)}
                        </span>
                        {isBest && <TrophyIcon className="h-5 w-5 text-yellow-500 ml-2" />}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {result.bestOffer && totalLimit > 0 ? (
                      <div>
                        <div className="text-sm text-gray-900 dark:text-white">
                           <span className="font-semibold">{formatCurrency(remainingLimit)}</span> left
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mt-1">
                          <div
                            className="bg-brand-secondary h-2.5 rounded-full"
                            style={{ width: `${totalLimit > 0 ? (remainingLimit / totalLimit) * 100 : 0}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">of {formatCurrency(totalLimit)} ({limitDescription})</div>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-500 dark:text-gray-400">N/A</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    <ul className="space-y-1">
                        {result.notes.map((note, i) => (
                            <li key={i} className="flex items-start">
                                {note.toLowerCase().includes('stackable') ? (
                                    <Tooltip text="This offer can be combined with other store-level discounts.">
                                        <InfoIcon className="h-4 w-4 mr-2 text-blue-500 mt-0.5" />
                                    </Tooltip>
                                ) : <div className='w-4 mr-2 flex-shrink-0'></div>}
                                <span>{note}</span>
                            </li>
                        ))}
                    </ul>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultsTable;