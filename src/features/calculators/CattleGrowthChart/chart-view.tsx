import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

interface ChartViewProps {
  data: {
    day: number;
    weight: number;
    isProjection?: boolean;
  }[];
  targetWeight: number;
}

export function ChartView({ data, targetWeight }: ChartViewProps) {
  if (!data || data.length === 0) {
    return <div className="p-4 text-center text-gray-500">Not enough data to draw chart.</div>;
  }

  return (
    <div className="h-64 sm:h-80 w-full mt-4" role="img" aria-label="Cattle growth chart plotting weight over time">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis 
            dataKey="day" 
            label={{ value: 'Days Elapsed', position: 'insideBottomRight', offset: -5 }} 
            tick={{fontSize: 12}}
          />
          <YAxis 
            label={{ value: 'Weight (lbs)', angle: -90, position: 'insideLeft', offset: 20 }} 
            tick={{fontSize: 12}}
          />
          <Tooltip 
            formatter={(value: number) => [`${Math.round(value)} lbs`, 'Weight']}
            labelFormatter={(label: number) => `Day ${label}`}
          />
          <Legend wrapperStyle={{ fontSize: '12px' }} />
          
          <Line 
            type="monotone" 
            dataKey="weight" 
            name="Logged Weight"
            stroke="#2563eb" 
            strokeWidth={3}
            dot={{ r: 4 }}
            isAnimationActive={false}
          />
          
          {targetWeight > 0 && (
            <ReferenceLine 
              y={targetWeight} 
              stroke="#10b981" 
              strokeDasharray="3 3" 
              label={{ position: 'top', value: 'Target', fill: '#10b981', fontSize: 12 }} 
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
