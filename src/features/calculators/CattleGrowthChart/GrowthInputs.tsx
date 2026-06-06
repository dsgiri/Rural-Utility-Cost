import React from 'react';

interface GrowthInputsProps {
  currentWeight: number | '';
  setCurrentWeight: (v: number | '') => void;
  previousWeight: number | '';
  setPreviousWeight: (v: number | '') => void;
  daysBetween: number | '';
  setDaysBetween: (v: number | '') => void;
  targetWeight: number | '';
  setTargetWeight: (v: number | '') => void;
  futureDays: number | '';
  setFutureDays: (v: number | '') => void;
}

export function GrowthInputs(props: GrowthInputsProps) {
  const {
    currentWeight, setCurrentWeight,
    previousWeight, setPreviousWeight,
    daysBetween, setDaysBetween,
    targetWeight, setTargetWeight,
    futureDays, setFutureDays
  } = props;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="previousWeight">
          Previous Weight (lbs)
        </label>
        <input
          id="previousWeight"
          type="number"
          min="0"
          step="1"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={previousWeight}
          onChange={(e) => setPreviousWeight(e.target.value === '' ? '' : Number(e.target.value))}
          placeholder="e.g. 500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="currentWeight">
          Current Weight (lbs)
        </label>
        <input
          id="currentWeight"
          type="number"
          min="0"
          step="1"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={currentWeight}
          onChange={(e) => setCurrentWeight(e.target.value === '' ? '' : Number(e.target.value))}
          placeholder="e.g. 560"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="daysBetween">
          Days Between Weigh-Ins
        </label>
        <input
          id="daysBetween"
          type="number"
          min="1"
          step="1"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={daysBetween}
          onChange={(e) => setDaysBetween(e.target.value === '' ? '' : Number(e.target.value))}
          placeholder="e.g. 30"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="targetWeight">
          Target Weight (lbs)
        </label>
        <input
          id="targetWeight"
          type="number"
          min="0"
          step="1"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={targetWeight}
          onChange={(e) => setTargetWeight(e.target.value === '' ? '' : Number(e.target.value))}
          placeholder="e.g. 1200"
        />
      </div>
      <div className="sm:col-span-2 border-t pt-4 mt-2">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="futureDays">
          Target Date / Future Days (Optional)
        </label>
        <p className="text-xs text-gray-500 mb-2">Enter days in the future to project the animal's weight on that date.</p>
        <input
          id="futureDays"
          type="number"
          min="0"
          step="1"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={futureDays}
          onChange={(e) => setFutureDays(e.target.value === '' ? '' : Number(e.target.value))}
          placeholder="e.g. 90"
        />
      </div>
    </div>
  );
}
