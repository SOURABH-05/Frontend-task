import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import '../styles/Dashboard.scss';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip-container">
        <p className="tooltip-label">{label}</p>
        <p className="tooltip-value">${payload[0].value.toFixed(2)}k</p>
      </div>
    );
  }

  return null;
};

const ProfitChart = () => {
  const data = [
    { name: '1AM', profit: 10 },
    { name: '3AM', profit: 12 },
    { name: '6AM', profit: 18 },
    { name: '9AM', profit: 15 },
    { name: '12PM', profit: 22 },
    { name: '3PM', profit: 20 },
    { name: '6PM', profit: 25 },
    { name: '9PM', profit: 18 },
    { name: '12AM', profit: 15 },
  ];

  return (
    <div className="chart-container chart-container-2">
      <div className="chart-header">
        <div>
          <div className="chart-title">Total profit</div>
          <div className="chart-value">
            $144.5K
            <span className="percentage positive">+24.1%</span>
          </div>
        </div>
      </div>
      <div className="chart-content chart-content-2">
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            {/* <CartesianGrid strokeDasharray=" 3" stroke="rgba(148, 163, 184, 0.1)" vertical={false} /> */}
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }} 
            />
            {/* <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }} 
              tickFormatter={(value) => `${value}k`} 
              orientation="right"
            /> */}
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="profit" 
              fill="#6366f1" 
              radius={[4, 4, 0, 0]} 
              barSize={20} 
              animationDuration={1500} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProfitChart;