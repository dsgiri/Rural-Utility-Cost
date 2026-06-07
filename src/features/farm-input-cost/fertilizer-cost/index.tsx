import React, { useState } from 'react';
import { calculateFertilizerCost, FertilizerInput, FertilizerResult } from './calculator';
import { formatCurrency, formatNumber } from '../shared/formatters';

export default function FertilizerCostCalculator() {
  const [inputs, setInputs] = useState<FertilizerInput>({
    name: 'Urea',
    type: 'dry',
    pricePerUnit: 500,
    applicationRate: 100,
    acres: 40,
    nutrientN: 46,
    nutrientP: 0,
    nutrientK: 0,
    nutrientS: 0,
    density: 10.67,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: name === 'name' || name === 'type' ? value : Number(value) || 0
    }));
  };

  const results = calculateFertilizerCost(inputs);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Fertilizer Cost Calculator</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Compare fertilizer products by total price, nutrient price, and cost per acre.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-6 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Product Name</label>
              <input
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Type</label>
                <select
                  name="type"
                  value={inputs.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                >
                  <option value="dry">Dry</option>
                  <option value="liquid">Liquid</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Price ({inputs.type === 'dry' ? 'per ton' : 'per gallon'})
                </label>
                <input
                  type="number"
                  name="pricePerUnit"
                  value={inputs.pricePerUnit}
                  onChange={handleInputChange}
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  App Rate ({inputs.type === 'dry' ? 'lbs/ac' : 'gal/ac'})
                </label>
                <input
                  type="number"
                  name="applicationRate"
                  value={inputs.applicationRate}
                  onChange={handleInputChange}
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Acres</label>
                <input
                  type="number"
                  name="acres"
                  value={inputs.acres}
                  onChange={handleInputChange}
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            {inputs.type === 'liquid' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Density (lbs/gal)</label>
                <input
                  type="number"
                  name="density"
                  value={inputs.density}
                  onChange={handleInputChange}
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nutrient Analysis (%)</label>
              <div className="grid grid-cols-4 gap-2">
                <div>
                  <label className="block text-xs text-gray-500 mb-1 text-center">N</label>
                  <input
                    type="number"
                    name="nutrientN"
                    value={inputs.nutrientN || ''}
                    onChange={handleInputChange}
                    min="0"
                    max="100"
                    placeholder="N"
                    className="w-full px-2 py-2 text-center border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1 text-center">P2O5</label>
                  <input
                    type="number"
                    name="nutrientP"
                    value={inputs.nutrientP || ''}
                    onChange={handleInputChange}
                    min="0"
                    max="100"
                    placeholder="P"
                    className="w-full px-2 py-2 text-center border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1 text-center">K2O</label>
                  <input
                    type="number"
                    name="nutrientK"
                    value={inputs.nutrientK || ''}
                    onChange={handleInputChange}
                    min="0"
                    max="100"
                    placeholder="K"
                    className="w-full px-2 py-2 text-center border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1 text-center">S</label>
                  <input
                    type="number"
                    name="nutrientS"
                    value={inputs.nutrientS || ''}
                    onChange={handleInputChange}
                    min="0"
                    max="100"
                    placeholder="S"
                    className="w-full px-2 py-2 text-center border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Cost Summary: {inputs.name}</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-[#1a5f3f]/10 p-4 rounded-lg">
              <p className="text-sm text-[#1a5f3f] font-medium mb-1">Cost Per Acre</p>
              <p className="text-3xl font-bold text-[#1a5f3f]">{formatCurrency(results.costPerAcre)}</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-300 font-medium mb-1">Total Field Cost</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{formatCurrency(results.totalCost)}</p>
            </div>
          </div>

          <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-3">Applied Nutrients per Acre</h4>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden mb-6">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nutrient</th>
                  <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">lbs/ac</th>
                  <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Cost/lb</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {results.poundsOfN > 0 && (
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">Nitrogen (N)</td>
                    <td className="px-4 py-3 text-sm text-right text-gray-500 dark:text-gray-400">{formatNumber(results.poundsOfN, 1, 1)}</td>
                    <td className="px-4 py-3 text-sm text-right text-gray-500 dark:text-gray-400">{results.costPerLbN ? formatCurrency(results.costPerLbN) : '-'}</td>
                  </tr>
                )}
                {results.poundsOfP > 0 && (
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">Phosphorus (P2O5)</td>
                    <td className="px-4 py-3 text-sm text-right text-gray-500 dark:text-gray-400">{formatNumber(results.poundsOfP, 1, 1)}</td>
                    <td className="px-4 py-3 text-sm text-right text-gray-500 dark:text-gray-400">{results.costPerLbP ? formatCurrency(results.costPerLbP) : '-'}</td>
                  </tr>
                )}
                {results.poundsOfK > 0 && (
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">Potassium (K2O)</td>
                    <td className="px-4 py-3 text-sm text-right text-gray-500 dark:text-gray-400">{formatNumber(results.poundsOfK, 1, 1)}</td>
                    <td className="px-4 py-3 text-sm text-right text-gray-500 dark:text-gray-400">{results.costPerLbK ? formatCurrency(results.costPerLbK) : '-'}</td>
                  </tr>
                )}
                {results.poundsOfS > 0 && (
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">Sulfur (S)</td>
                    <td className="px-4 py-3 text-sm text-right text-gray-500 dark:text-gray-400">{formatNumber(results.poundsOfS, 1, 1)}</td>
                    <td className="px-4 py-3 text-sm text-right text-gray-500 dark:text-gray-400">{results.costPerLbS ? formatCurrency(results.costPerLbS) : '-'}</td>
                  </tr>
                )}
                {(results.poundsOfN + results.poundsOfP + results.poundsOfK + results.poundsOfS) === 0 && (
                  <tr>
                    <td colSpan={3} className="px-4 py-4 text-sm text-center text-gray-500">No nutrients entered or application rate is 0.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
            Note: Cost per lb of nutrient is simplified and assumes all product cost is allocated to a single nutrient. For complex blends, actual single-nutrient valuation requires more advanced factoring.
          </p>
        </div>
      </div>
    </div>
  );
}
