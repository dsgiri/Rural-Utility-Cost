import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import { calculateDegreeDays, DegreeDayInput, DegreeDayEntry, Milestone } from './calculator';
import { formatNumber } from '../shared/formatters';

// Generate last 5 days as default
const generateDefaultEntries = (): DegreeDayEntry[] => {
  const entries: DegreeDayEntry[] = [];
  const today = new Date();
  for (let i = 4; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    entries.push({
      date: d.toISOString().split('T')[0],
      minTemp: Math.floor(Math.random() * (55 - 45 + 1)) + 45, // basic mock min 45-55
      maxTemp: Math.floor(Math.random() * (85 - 75 + 1)) + 75, // basic mock max 75-85
    });
  }
  return entries;
};

const DEFAULT_MILESTONES: Milestone[] = [
  { name: 'Egg Hatch', ddRequired: 30 },
  { name: 'First Instar', ddRequired: 75 },
  { name: 'Adult Flight', ddRequired: 150 },
];

export default function DegreeDayCalculator() {
  const [lowerThreshold, setLowerThreshold] = useState<number>(50);
  const [upperThreshold, setUpperThreshold] = useState<number | ''>('');
  const [entries, setEntries] = useState<DegreeDayEntry[]>(generateDefaultEntries());
  const [biofixAccumulation, setBiofixAccumulation] = useState<number>(0); 

  const handleEntryChange = (index: number, field: 'minTemp' | 'maxTemp', value: string) => {
    const newEntries = [...entries];
    newEntries[index] = {
      ...newEntries[index],
      [field]: Number(value) || 0
    };
    setEntries(newEntries);
  };

  const addDay = () => {
    const lastDateStr = entries[entries.length - 1]?.date || new Date().toISOString().split('T')[0];
    const lastDate = new Date(lastDateStr);
    lastDate.setDate(lastDate.getDate() + 1);
    
    setEntries([
      ...entries,
      {
        date: lastDate.toISOString().split('T')[0],
        minTemp: 50,
        maxTemp: 80,
      }
    ]);
  };

  const removeDay = (index: number) => {
    if (entries.length > 1) {
      const newEntries = [...entries];
      newEntries.splice(index, 1);
      setEntries(newEntries);
    }
  };

  const input: DegreeDayInput = {
    lowerThreshold,
    upperThreshold: upperThreshold === '' ? null : Number(upperThreshold),
    entries,
  };

  const results = calculateDegreeDays(input);
  const totalWithBiofix = results.totalAccumulated + biofixAccumulation;

  // Formatting data for chart
  const chartData = results.results.map((r, i) => ({
    date: r.date,
    day: `Day ${i + 1}`,
    Accumulated: r.accumulatedDD + biofixAccumulation,
    Daily: r.dailyDD
  }));

  const nextMilestone = DEFAULT_MILESTONES.find(m => m.ddRequired > totalWithBiofix);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mt-8">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Degree-Day Insect Timing Tool</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Estimate insect development timing using accumulated heat units (Degree-Days) using the simple average method.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-6 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Model Parameters</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1">Lower Threshold (°F)</label>
                  <input
                    type="number"
                    value={lowerThreshold}
                    onChange={(e) => setLowerThreshold(Number(e.target.value) || 0)}
                    className="w-full px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md text-sm shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1">Upper Threshold (°F)</label>
                  <input
                    type="number"
                    value={upperThreshold}
                    onChange={(e) => setUpperThreshold(e.target.value)}
                    placeholder="Optional"
                    className="w-full px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md text-sm shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1">Prior DD (Biofix)</label>
                  <input
                    type="number"
                    value={biofixAccumulation}
                    onChange={(e) => setBiofixAccumulation(Number(e.target.value) || 0)}
                    className="w-full px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md text-sm shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-800 dark:text-white"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">Daily Temperatures</h3>
                <button 
                  onClick={addDay}
                  className="text-xs font-medium text-[#1a5f3f] dark:text-[#6ee7b7] hover:underline"
                >
                  + Add Day
                </button>
              </div>
              <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                {entries.map((entry, index) => (
                  <div key={index} className="flex gap-2 items-center bg-white dark:bg-gray-700 p-2 rounded-lg border border-gray-200 dark:border-gray-600">
                    <input
                      type="date"
                      value={entry.date}
                      onChange={(e) => {
                        const newEntries = [...entries];
                        newEntries[index].date = e.target.value;
                        setEntries(newEntries);
                      }}
                      className="flex-1 px-2 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-transparent dark:text-white"
                    />
                    <div className="w-20">
                      <span className="text-[10px] text-gray-500 block">Min(°F)</span>
                      <input
                        type="number"
                        value={entry.minTemp}
                        onChange={(e) => handleEntryChange(index, 'minTemp', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <div className="w-20">
                      <span className="text-[10px] text-gray-500 block">Max(°F)</span>
                      <input
                        type="number"
                        value={entry.maxTemp}
                        onChange={(e) => handleEntryChange(index, 'maxTemp', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <button 
                      onClick={() => removeDay(index)}
                      disabled={entries.length === 1}
                      className="text-gray-400 hover:text-red-500 p-1 disabled:opacity-30 mt-3"
                    >
                      <span className="sr-only">Remove</span>
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 flex flex-col h-full">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Accumulation Output</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-[#1a5f3f]/10 p-4 rounded-lg">
              <p className="text-sm text-[#1a5f3f] font-medium mb-1">Total Accumulated DD</p>
              <p className="text-3xl font-bold text-[#1a5f3f]">{formatNumber(totalWithBiofix, 0, 1)}</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-300 font-medium mb-1">Next Milestone</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">{nextMilestone ? nextMilestone.name : 'Completed'}</p>
              {nextMilestone && (
                <p className="text-xs text-gray-500 mt-1">Due at {nextMilestone.ddRequired} DD</p>
              )}
            </div>
          </div>

          <div className="h-48 w-full border border-gray-100 dark:border-gray-700 rounded-lg p-2 bg-white dark:bg-gray-800 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 10, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#6B7280' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#6B7280' }} />
                <RechartsTooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                 />
                <Line type="monotone" dataKey="Accumulated" stroke="#1a5f3f" strokeWidth={2} dot={{r:3}} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-auto p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-900">
            <h4 className="text-sm font-bold text-blue-900 dark:text-blue-300 mb-1">How This Works</h4>
            <p className="text-xs text-blue-800/80 dark:text-blue-400/80">
              Insects are cold-blooded and develop based on heat accumulation. Degree-days (DD) represent heat units effectively absorbed. The formula used here is: <code>((Max Temp + Min Temp) / 2) - Lower Threshold</code>. Temps below the lower threshold result in 0 DD for the day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
