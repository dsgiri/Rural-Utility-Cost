import React from 'react';
import { GrowthResult } from './calculator';

interface GrowthResultsProps {
  result: GrowthResult;
  currentWeight: number;
}

export function GrowthResults({ result, currentWeight }: GrowthResultsProps) {
  const getStatusColor = (status: GrowthResult['status']) => {
    switch (status) {
      case 'ahead of target': return 'bg-green-100 text-green-800 border-green-200';
      case 'on track': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'behind target': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'gaining negative/zero': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-gray-50 border rounded-lg p-4 sm:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h3 className="text-xl font-bold text-gray-900">Growth Summary</h3>
        <div className={`px-3 py-1 rounded-full text-sm font-semibold border capitalize ${getStatusColor(result.status)}`}>
          {result.status}
        </div>
      </div>

      {result.warning && (
        <div className="mb-6 p-3 bg-red-50 text-red-700 text-sm rounded-md border border-red-200">
          <strong>Notice:</strong> {result.warning}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-3 rounded shadow-sm border">
          <div className="text-xs text-gray-500 uppercase tracking-wide">ADG</div>
          <div className="text-2xl font-bold text-blue-700">{result.adg.toFixed(2)} <span className="text-sm font-normal text-gray-500">lbs/day</span></div>
        </div>
        <div className="bg-white p-3 rounded shadow-sm border">
          <div className="text-xs text-gray-500 uppercase tracking-wide">Weight Gained</div>
          <div className="text-2xl font-bold text-gray-900">{result.weightGained > 0 ? '+' : ''}{result.weightGained} <span className="text-sm font-normal text-gray-500">lbs</span></div>
        </div>
        <div className="bg-white p-3 rounded shadow-sm border">
          <div className="text-xs text-gray-500 uppercase tracking-wide">Current Weight</div>
          <div className="text-2xl font-bold text-gray-900">{currentWeight} <span className="text-sm font-normal text-gray-500">lbs</span></div>
        </div>
        <div className="bg-white p-3 rounded shadow-sm border">
          <div className="text-xs text-gray-500 uppercase tracking-wide">Remaining to Target</div>
          <div className="text-2xl font-bold text-gray-900">{Math.round(result.remainingGain)} <span className="text-sm font-normal text-gray-500">lbs</span></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded border overflow-hidden">
          <div className="bg-gray-100 px-4 py-2 border-b text-sm font-semibold text-gray-700">Timeline Projection</div>
          <div className="p-4">
            {result.daysToTarget !== null ? (
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {Math.ceil(result.daysToTarget)} <span className="text-lg font-normal text-gray-500">days</span>
              </div>
            ) : (
              <div className="text-gray-500 italic">Cannot project (ADG ≤ 0)</div>
            )}
            <p className="text-xs text-gray-500">Estimated days to reach target weight maintaining current ADG.</p>
          </div>
        </div>

        {result.projectedWeight !== null && (
          <div className="bg-white rounded border overflow-hidden">
            <div className="bg-gray-100 px-4 py-2 border-b text-sm font-semibold text-gray-700">Future Weight Projection</div>
            <div className="p-4">
              <div className="text-3xl font-bold text-indigo-700 mb-1">
                {Math.round(result.projectedWeight)} <span className="text-lg font-normal text-gray-500">lbs</span>
              </div>
              <p className="text-xs text-gray-500">Expected weight on your target date based on current ADG.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
