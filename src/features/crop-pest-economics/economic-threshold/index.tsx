import React, { useState } from 'react';
import { calculateThreshold, ThresholdInput } from './calculator';
import { formatCurrency, formatNumber } from '../shared/formatters';

export default function EconomicThresholdCalculator() {
  const [inputs, setInputs] = useState<ThresholdInput>({
    cropValuePerUnit: 4.50,
    controlCostPerAcre: 20.00,
    controlEffectiveness: 85,
    injuryPerPestUnit: 0.5,
    yieldUnit: 'bushels',
    pestName: 'Aphids',
    pestUnit: 'per plant',
  });

  const [currentLevel, setCurrentLevel] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: ['yieldUnit', 'pestName', 'pestUnit'].includes(name) ? value : Number(value) || 0
    }));
  };

  const results = calculateThreshold(inputs);
  
  const isOverThreshold = results.isValid && currentLevel > 0 && currentLevel >= results.economicThreshold;
  const isOverEIL = results.isValid && currentLevel > 0 && currentLevel >= results.economicInjuryLevel;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mt-8">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Economic Threshold Calculator</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Determine the break-even density of pests (Economic Injury Level) and calculate the action point (Economic Threshold).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-6 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Pest Name</label>
                <input
                  type="text"
                  name="pestName"
                  value={inputs.pestName}
                  onChange={handleInputChange}
                  placeholder="e.g., Alfalfa Weevil"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Pest Density Unit</label>
                <input
                  type="text"
                  name="pestUnit"
                  value={inputs.pestUnit}
                  onChange={handleInputChange}
                  placeholder="e.g., larvae per sweep"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Control Cost (per Acre)</label>
                <input
                  type="number"
                  name="controlCostPerAcre"
                  value={inputs.controlCostPerAcre}
                  onChange={handleInputChange}
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex justify-between">
                  <span>Control Efficacy</span>
                  <span className="text-xs text-gray-400">(% Kill)</span>
                </label>
                <input
                  type="number"
                  name="controlEffectiveness"
                  value={inputs.controlEffectiveness}
                  onChange={handleInputChange}
                  min="0"
                  max="100"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Crop Value (per unit)</label>
                <input
                  type="number"
                  name="cropValuePerUnit"
                  value={inputs.cropValuePerUnit}
                  onChange={handleInputChange}
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex justify-between">
                  <span>Yield Unit</span>
                </label>
                <input
                  type="text"
                  name="yieldUnit"
                  value={inputs.yieldUnit}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Yield Lost per Pest Unit
              </label>
              <div className="flex bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm overflow-hidden focus-within:ring-1 focus-within:ring-[#1a5f3f] focus-within:border-[#1a5f3f]">
                <input
                  type="number"
                  name="injuryPerPestUnit"
                  value={inputs.injuryPerPestUnit}
                  onChange={handleInputChange}
                  min="0"
                  step="0.001"
                  className="flex-1 px-4 py-2 border-0 focus:ring-0 bg-transparent dark:text-white"
                />
                <div className="bg-gray-50 dark:bg-gray-800 px-3 py-2 border-l border-gray-300 dark:border-gray-600 text-sm text-gray-500 dark:text-gray-400 flex items-center">
                  {inputs.yieldUnit}
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">E.g. If 1 pest {inputs.pestUnit} causes 0.5 {inputs.yieldUnit} of yield loss per acre.</p>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Current Scouted Level (Optional)
              </label>
              <div className="flex bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm overflow-hidden focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500">
                <input
                  type="number"
                  value={currentLevel || ''}
                  onChange={(e) => setCurrentLevel(Number(e.target.value) || 0)}
                  min="0"
                  step="0.1"
                  placeholder="Enter current count..."
                  className="flex-1 px-4 py-2 border-0 focus:ring-0 bg-transparent dark:text-white"
                />
                <div className="bg-blue-50 dark:bg-blue-900/30 px-3 py-2 border-l border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300 flex items-center">
                  {inputs.pestUnit}
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 flex flex-col h-full">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Threshold Analysis</h3>
          
          {!results.isValid ? (
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center text-gray-500 flex-grow flex items-center justify-center">
              Please enter valid numbers greater than zero in all required fields to see the analysis.
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-[#1a5f3f] dark:border-[#6ee7b7]">
                  <p className="text-sm text-[#1a5f3f] dark:text-[#6ee7b7] font-medium mb-1">Economic Threshold (Action Point)</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {formatNumber(results.economicThreshold, 1, 2)} <span className="text-lg font-normal text-gray-500">{inputs.pestUnit}</span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Historically set at 80% of EIL to allow time to act before economic loss occurs.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-medium mb-1">Economic Injury Level (EIL)</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {formatNumber(results.economicInjuryLevel, 1, 2)} <span className="text-base font-normal text-gray-500">{inputs.pestUnit}</span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">The density where the cost of damage exactly equals the cost of control.</p>
                </div>
              </div>

              {currentLevel > 0 && (
                <div className={`mt-2 mb-6 p-4 rounded-lg border ${
                    isOverEIL 
                      ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-900' 
                      : isOverThreshold 
                        ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-900'
                        : 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900'
                  }`}>
                  <h4 className={`text-sm font-bold mb-1 ${
                    isOverEIL ? 'text-red-900 dark:text-red-300' 
                    : isOverThreshold ? 'text-yellow-900 dark:text-yellow-300' 
                    : 'text-green-900 dark:text-green-300'
                  }`}>
                    Action Recommendation
                  </h4>
                  <p className={`text-sm ${
                    isOverEIL ? 'text-red-800 dark:text-red-400' 
                    : isOverThreshold ? 'text-yellow-800 dark:text-yellow-400' 
                    : 'text-green-800 dark:text-green-400'
                  }`}>
                    {isOverEIL 
                      ? `Your scouted level (${currentLevel}) exceeds the Economic Injury Level. You are actively losing more money than treatment costs. Control action is highly recommended immediately.` 
                      : isOverThreshold 
                        ? `Your scouted level (${currentLevel}) has crossed the active Economic Threshold. Prepare control action soon to prevent pests from reaching the Economic Injury Level.` 
                        : `Your scouted level (${currentLevel}) is below the Economic Threshold. Control action is not mathematically justified at this point. Continue monitoring.`}
                  </p>
                </div>
              )}
              
              <div className="mt-auto">
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-4">
                  <strong>Disclaimer:</strong> This calculates a classic break-even point. It is a decision aid, not a field diagnosis or hard rule. It cannot account for field constraints, weather, secondary pests, or complex ecological interactions. Always ground-truth decisions with scouting and local agronomist guidance.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
