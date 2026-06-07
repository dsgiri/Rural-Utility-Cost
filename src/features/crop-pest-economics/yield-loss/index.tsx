import React, { useState } from 'react';
import { calculateYieldLoss, YieldLossInput } from './calculator';
import { formatCurrency, formatNumber } from '../shared/formatters';

export default function YieldLossCalculator() {
  const [inputs, setInputs] = useState<YieldLossInput>({
    cropType: 'Corn',
    expectedYield: 200,
    yieldUnit: 'bushels',
    percentLoss: 5,
    cropPrice: 4.50,
    controlCost: 25.00,
    acres: 100,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: name === 'cropType' || name === 'yieldUnit' ? value : Number(value) || 0
    }));
  };

  const results = calculateYieldLoss(inputs);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Pest Yield-Loss Calculator</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Estimate expected crop yield loss from pest pressure and translate that into a dollar impact to understand crop-level risk.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-6 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Crop Type</label>
                <input
                  type="text"
                  name="cropType"
                  value={inputs.cropType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Yield Unit</label>
                <select
                  name="yieldUnit"
                  value={inputs.yieldUnit}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                >
                  <option value="bushels">Bushels</option>
                  <option value="lbs">Pounds</option>
                  <option value="tons">Tons</option>
                  <option value="cwt">Hundredweight (cwt)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex justify-between">
                  <span>Expected Yield</span>
                  <span className="text-xs text-gray-400">Per Acre</span>
                </label>
                <input
                  type="number"
                  name="expectedYield"
                  value={inputs.expectedYield}
                  onChange={handleInputChange}
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Estimated Loss (%)</label>
                <input
                  type="number"
                  name="percentLoss"
                  value={inputs.percentLoss}
                  onChange={handleInputChange}
                  min="0"
                  max="100"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Crop Price (per {inputs.yieldUnit})</label>
                <input
                  type="number"
                  name="cropPrice"
                  value={inputs.cropPrice}
                  onChange={handleInputChange}
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Control Cost (per Acre)</label>
                <input
                  type="number"
                  name="controlCost"
                  value={inputs.controlCost}
                  onChange={handleInputChange}
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Acres Affected</label>
              <input
                type="number"
                name="acres"
                value={inputs.acres}
                onChange={handleInputChange}
                min="0"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
              />
            </div>
          </form>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Impact Analysis</h3>
            {results.confidence === 'low' && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                Low Confidence Estimate
              </span>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-100 dark:border-red-900/30">
              <p className="text-sm text-red-700 dark:text-red-400 font-medium mb-1">Loss Value (Per Acre)</p>
              <p className="text-3xl font-bold text-red-700 dark:text-red-400">{formatCurrency(results.dollarLossPerAcre)}</p>
              <p className="text-xs text-red-600/80 dark:text-red-400/80 mt-1">{formatNumber(results.lostYieldPerAcre, 0, 1)} {inputs.yieldUnit} lost</p>
            </div>
            <div className={`p-4 rounded-lg border ${results.actionJustified ? 'bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-900/30' : 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700'}`}>
              <p className={`text-sm font-medium mb-1 ${results.actionJustified ? 'text-green-700 dark:text-green-400' : 'text-gray-600 dark:text-gray-400'}`}>
                Est. Net Impact (Per Acre)
              </p>
              <p className={`text-3xl font-bold ${results.actionJustified ? 'text-green-700 dark:text-green-400' : 'text-gray-900 dark:text-white'}`}>
                {results.actionJustified ? '+' : ''}{formatCurrency(results.netImpactPerAcre)}
              </p>
              <p className={`text-xs mt-1 ${results.actionJustified ? 'text-green-600/80 dark:text-green-400/80' : 'text-gray-500'}`}>
                After {formatCurrency(inputs.controlCost)} control cost
              </p>
            </div>
          </div>

          <div className="space-y-4 flex-grow">
            <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
              <span className="text-sm text-gray-600 dark:text-gray-400">Total Est. Lost Revenue</span>
              <span className="text-sm font-semibold text-red-600 dark:text-red-400">{formatCurrency(results.totalDollarLoss)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
              <span className="text-sm text-gray-600 dark:text-gray-400">Total Est. Physical Loss</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">{formatNumber(results.totalLostYield, 0, 1)} {inputs.yieldUnit}</span>
            </div>
          </div>

          <div className={`mt-6 p-4 rounded-lg border ${results.actionJustified ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900' : 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-900'}`}>
            <h4 className={`text-sm font-bold mb-1 ${results.actionJustified ? 'text-green-900 dark:text-green-300' : 'text-yellow-900 dark:text-yellow-300'}`}>
              Conclusion
            </h4>
            <p className={`text-sm ${results.actionJustified ? 'text-green-800 dark:text-green-400' : 'text-yellow-800 dark:text-yellow-400'}`}>
              {results.actionJustified 
                ? `The estimated loss (${formatCurrency(results.dollarLossPerAcre)}) exceeds the cost of control (${formatCurrency(inputs.controlCost)}). Action may be justified if the treatment is highly effective.` 
                : `The estimated loss (${formatCurrency(results.dollarLossPerAcre)}) is less than or equal to the control cost (${formatCurrency(inputs.controlCost)}). Treating this pest may result in a negative return on investment.`}
            </p>
          </div>
          
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
            Note: This calculator assumes a direct linear percentage loss. Real yield loss may vary dramatically depending on crop growth stage, weather, and compounding stressors.
          </p>
        </div>
      </div>
    </div>
  );
}
