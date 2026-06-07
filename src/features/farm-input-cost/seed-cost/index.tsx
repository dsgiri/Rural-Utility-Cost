import React, { useState } from 'react';
import { calculateSeedCost, SeedInput } from './calculator';
import { formatCurrency, formatNumber } from '../shared/formatters';

export default function SeedCostCalculator() {
  const [inputs, setInputs] = useState<SeedInput>({
    cropName: 'Corn',
    plantingType: 'row',
    pricePerUnit: 250,
    seedsPerUnit: 80000, 
    seedingRatePerAcre: 32000,
    acres: 80,
    germinationRate: 95,
    technologyFee: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: name === 'cropName' || name === 'plantingType' ? value : Number(value) || 0
    }));
  };

  const results = calculateSeedCost(inputs);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mt-8">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Seed Cost Calculator</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Estimate seed cost per acre, total field cost, and seating rate impact.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-6 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Crop/Seed Name</label>
                <input
                  type="text"
                  name="cropName"
                  value={inputs.cropName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Type</label>
                <select
                  name="plantingType"
                  value={inputs.plantingType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                >
                  <option value="row">Row Crop (Seeds)</option>
                  <option value="pasture">Pasture/Cover (Lbs)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center justify-between">
                  <span>Price per Unit</span>
                  <span className="text-xs text-gray-400">(Bag/Tote)</span>
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
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center justify-between">
                  <span>Tech Fee</span>
                  <span className="text-xs text-gray-400">(Per Unit)</span>
                </label>
                <input
                  type="number"
                  name="technologyFee"
                  value={inputs.technologyFee}
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
                  {inputs.plantingType === 'row' ? 'Seeds per Unit' : 'Lbs per Unit'}
                </label>
                <input
                  type="number"
                  name="seedsPerUnit"
                  value={inputs.seedsPerUnit}
                  onChange={handleInputChange}
                  min="1"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Rate ({inputs.plantingType === 'row' ? 'Seeds/ac' : 'Lbs/ac'})
                </label>
                <input
                  type="number"
                  name="seedingRatePerAcre"
                  value={inputs.seedingRatePerAcre}
                  onChange={handleInputChange}
                  min="1"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
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
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Germination (%)</label>
                <input
                  type="number"
                  name="germinationRate"
                  value={inputs.germinationRate}
                  onChange={handleInputChange}
                  min="0"
                  max="100"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 flex flex-col h-full">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Cost Summary: {inputs.cropName}</h3>
          
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

          <div className="space-y-4 flex-grow">
            <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
              <span className="text-sm text-gray-600 dark:text-gray-400">Total Units Required</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">{formatNumber(results.unitsRequired, 1, 2)} units</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
              <span className="text-sm text-gray-600 dark:text-gray-400">Actual Cost per Unit</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">{formatCurrency(results.totalCostPerUnit)}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
              <span className="text-sm text-gray-600 dark:text-gray-400">Estimated Live Seeds/Acre</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">{formatNumber(results.liveSeedsPerAcre)}</span>
            </div>
            
            {results.costPer1000LiveSeeds !== null && inputs.plantingType === 'row' && (
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Cost per 1k Live Seeds</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{formatCurrency(results.costPer1000LiveSeeds)}</span>
              </div>
            )}
          </div>
          
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-6 leading-relaxed">
            Note: True field emergence is typically lower than the laboratory germination rate due to soil conditions, weather, and equipment performance.
          </p>
        </div>
      </div>
    </div>
  );
}
