import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend } from 'recharts';
import { SpotRateEntry, SpotRateProduct, sortRatesByDate, getLatestRate } from './spotRates';
import { formatCurrency } from '../shared/formatters';

const DEFAULT_PRODUCTS: SpotRateProduct[] = [
  { id: 'urea', name: 'Urea (46-0-0)', unit: 'ton', category: 'fertilizer' },
  { id: 'uan28', name: 'UAN 28%', unit: 'ton', category: 'fertilizer' },
  { id: 'dap', name: 'DAP (18-46-0)', unit: 'ton', category: 'fertilizer' },
  { id: 'corn', name: 'Corn Seed', unit: 'bag (80k)', category: 'seed' },
];

const INITIAL_RATES: SpotRateEntry[] = [
  { id: '1', date: '2023-11-01', product: 'urea', price: 420 },
  { id: '2', date: '2023-12-01', product: 'urea', price: 450 },
  { id: '3', date: '2024-01-01', product: 'urea', price: 475 },
  { id: '4', date: '2024-02-01', product: 'urea', price: 460 },
  
  { id: '5', date: '2023-11-01', product: 'dap', price: 580 },
  { id: '6', date: '2023-12-01', product: 'dap', price: 610 },
  { id: '7', date: '2024-01-01', product: 'dap', price: 630 },
  { id: '8', date: '2024-02-01', product: 'dap', price: 645 },
];

export default function SpotRatesTracker() {
  const [rates, setRates] = useState<SpotRateEntry[]>(INITIAL_RATES);
  const [newEntry, setNewEntry] = useState({
    date: new Date().toISOString().split('T')[0],
    product: 'urea',
    price: ''
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEntry.price || isNaN(Number(newEntry.price))) return;

    setRates(prev => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        date: newEntry.date,
        product: newEntry.product,
        price: Number(newEntry.price)
      }
    ]);
    setNewEntry(prev => ({ ...prev, price: '' }));
  };

  // Group data by date for Recharts
  const chartData = useMemo(() => {
    const sorted = sortRatesByDate(rates);
    const dateMap = new Map<string, any>();
    
    sorted.forEach(rate => {
      if (!dateMap.has(rate.date)) {
        dateMap.set(rate.date, { date: rate.date });
      }
      const entry = dateMap.get(rate.date);
      entry[rate.product] = rate.price;
    });

    return Array.from(dateMap.values());
  }, [rates]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mt-8">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Spot Rate Tracker</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Track and compare historical farm input pricing.
        </p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1 border-r border-transparent lg:border-gray-200 dark:border-gray-700 lg:pr-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Latest Rates</h3>
            <div className="space-y-3 mb-8">
              {DEFAULT_PRODUCTS.map(product => {
                const latest = getLatestRate(rates, product.id);
                return (
                  <div key={product.id} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{product.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">per {product.unit}</p>
                    </div>
                    <div className="text-right">
                      {latest ? (
                        <>
                          <p className="text-md font-bold text-[#1a5f3f] dark:text-[#6ee7b7]">{formatCurrency(latest.price)}</p>
                          <p className="text-xs text-gray-400">{latest.date}</p>
                        </>
                      ) : (
                        <span className="text-sm text-gray-400">No data</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Add Entry</h3>
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date</label>
                <input
                  type="date"
                  required
                  value={newEntry.date}
                  onChange={e => setNewEntry(prev => ({ ...prev, date: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Product</label>
                <select
                  value={newEntry.product}
                  onChange={e => setNewEntry(prev => ({ ...prev, product: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                >
                  {DEFAULT_PRODUCTS.map(p => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price</label>
                <input
                  type="number"
                  required
                  step="0.01"
                  min="0"
                  value={newEntry.price}
                  onChange={e => setNewEntry(prev => ({ ...prev, price: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#1a5f3f] focus:border-[#1a5f3f] dark:bg-gray-700 dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#1a5f3f] hover:bg-[#13422c] text-white shadow-sm rounded-md transition-colors font-medium"
              >
                Log Price
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 mt-8 lg:mt-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Price History</h3>
            <div className="h-[400px] w-full border border-gray-100 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis 
                    dataKey="date" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6B7280' }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6B7280' }}
                    tickFormatter={(val) => `$${val}`}
                  />
                  <RechartsTooltip 
                    formatter={(value: number) => [formatCurrency(value), 'Price']}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: 12, paddingTop: '20px' }} />
                  {DEFAULT_PRODUCTS.map((prod, i) => {
                    const colors = ['#1a5f3f', '#3b82f6', '#f59e0b', '#ef4444'];
                    // Only render lines that have data
                    if (rates.some(r => r.product === prod.id)) {
                      return (
                        <Line 
                          key={prod.id}
                          type="monotone" 
                          dataKey={prod.id} 
                          name={prod.name}
                          stroke={colors[i % colors.length]} 
                          strokeWidth={2}
                          dot={{ r: 4, strokeWidth: 2 }}
                          activeDot={{ r: 6 }}
                          connectNulls
                        />
                      );
                    }
                    return null;
                  })}
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
              * Rates shown are for demonstration purposes and do not reflect real-time commodities markets.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
