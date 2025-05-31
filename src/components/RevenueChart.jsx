import React from 'react';
import {
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceDot,
} from 'recharts';
import '../styles/Dashboard.scss';
import DateRangeSelector from './DateRangeSelector';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip-container">
        <p className="tooltip-label">{label}</p>
        <p className="tooltip-value">${payload[0].value.toFixed(1)}k</p>
      </div>
    );
  }
  return null;
};

const RevenueChart = () => {
  const data = [
    { name: 'Jan', revenue: 0, expenses: 40 },
    { name: 'Feb', revenue: 20, expenses: 10 },
    { name: 'Mar', revenue: 50, expenses: 25 },
    { name: 'Apr', revenue: 80, expenses: 50 },
    { name: 'May', revenue: 95, expenses: 60 },
    { name: 'Jun', revenue: 125.2, expenses: 85 },
    { name: 'Jul', revenue: 140, expenses: 125 },
    { name: 'Aug', revenue: 160, expenses: 175 },
    { name: 'Sep', revenue: 180, expenses: 140 },
    { name: 'Oct', revenue: 200, expenses: 85 },
    { name: 'Nov', revenue: 225, expenses: 100 },
    { name: 'Dec', revenue: 250, expenses: 115 },
  ];

  return (
    <div className="chart-container chart-container-1">
      <div className="chart-header">
        <div>
          <div className="chart-title">Total revenue</div>
          <div className="chart-value">
            $240.8K
            <span className="percentage positive">+24.6%</span>
          </div>
        </div>
        <div className="chart-legend">
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#6366f1' }}></div>
            <div className="legend-text">Revenue</div>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#14b8a6' }}></div>
            <div className="legend-text">Expenses</div>
          </div>
          <div className="top-header"><DateRangeSelector /></div>
        </div>
      </div>
      <div className="chart-content">
        <ResponsiveContainer width="100%" height={450}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            
            {/* Gradients for smooth shadows */}
            <defs>
              <linearGradient id="shadowRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.4} />
                <stop offset="80%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="shadowExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.35} />
                <stop offset="80%" stopColor="#14b8a6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }} 
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={[0, 25, 50, 100, 150, 200, 250]}
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              domain={[0, 250]}
              tickFormatter={(value) => `${value}k`}
            />
            <Tooltip content={<CustomTooltip />} />

            <ReferenceLine 
              x="Jun" 
              stroke="#6366f1" 
              strokeDasharray="3 3" 
              strokeWidth={1} 
            />
            <ReferenceDot 
              x="Jun" 
              y={125.2} 
              r={5} 
              fill="#6366f1" 
              stroke="#0f172a" 
              strokeWidth={2} 
            />

            {/* Area under lines for shadow effect */}
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="none"
              fill="url(#shadowRevenue)"
              fillOpacity={1}
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="none"
              fill="url(#shadowExpenses)"
              fillOpacity={1}
            />

            {/* Actual Lines */}
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#6366f1"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, fill: '#6366f1', stroke: '#0f172a', strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="expenses"
              stroke="#14b8a6"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, fill: '#14b8a6', stroke: '#0f172a', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
