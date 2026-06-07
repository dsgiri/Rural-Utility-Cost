import React from 'react';
import { SpotRateEntry, SpotRateProduct } from '../spot-rates/spotRates';
import { formatCurrency } from '../shared/formatters';

interface TickerProps {
  rates: SpotRateEntry[];
  products: SpotRateProduct[];
}

export default function Ticker({ rates, products }: TickerProps) {
  if (!rates || rates.length === 0) return null;

  return (
    <div className="w-full bg-[#111827] text-white overflow-hidden py-2 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center text-xs font-semibold tracking-wider text-gray-400 uppercase mr-6 shrink-0">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Latest Spot
        </div>
        
        {/* Simple scrolling ticker or grid layout, going with a neat flex layout for simplicity and responsiveness */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide flex-grow items-center pb-1 sm:pb-0">
          {products.map(product => {
            // Find latest rate for product
            const productRates = rates.filter(r => r.product === product.id).sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime());
            if (productRates.length === 0) return null;
            
            const latest = productRates[productRates.length - 1];
            
            // Calculate trend if we have at least 2 data points
            let trend = 0; // 0 = flat, 1 = up, -1 = down
            let percentChange = 0;
            if (productRates.length > 1) {
              const previous = productRates[productRates.length - 2];
              if (latest.price > previous.price) trend = 1;
              if (latest.price < previous.price) trend = -1;
              percentChange = Math.abs((latest.price - previous.price) / previous.price * 100);
            }

            return (
              <div key={product.id} className="flex items-center gap-2 whitespace-nowrap shrink-0">
                <span className="text-sm font-medium text-gray-300">{product.name}</span>
                <span className="text-sm font-bold">{formatCurrency(latest.price)}</span>
                {trend !== 0 && (
                  <span className={`text-xs font-medium flex items-center ${trend > 0 ? 'text-red-400' : 'text-green-400'}`}>
                    {trend > 0 ? '▲' : '▼'} {percentChange.toFixed(1)}%
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
