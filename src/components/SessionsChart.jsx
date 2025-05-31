import React from 'react';
import { 
  LineChart, 
  Line, 
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
        <p className="tooltip-value">{payload[0].value}</p>
      </div>
    );
  }

  return null;
};

const SessionsChart = () => {
  const data = [
    { name: '9 AM', sessions: 20 },
    { name: '12 PM', sessions: 35 },
    { name: '3 PM', sessions: 25 },
    { name: '6 PM', sessions: 45 },
    { name: '9 PM', sessions: 30 },
    { name: '12 AM', sessions: 20 },
  ];

  return (
    <div className="chart-container chart-container-3">
      <div className="chart-header">
        <div>
          <div className="chart-title">Total sessions</div>
          <div className="chart-value">
            400
            <span className="percentage positive">+16.8%</span>
          </div>
        </div>
      </div>
      <div className="chart-content  chart-content-3">
        <ResponsiveContainer width="100%" height="80%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            {/* <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" /> */}
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }} 
              orientation="right"
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="sessions" 
              stroke="#a855f7" 
              strokeWidth={3} 
              dot={false} 
              activeDot={{ r: 6, fill: '#a855f7', stroke: '#0f172a', strokeWidth: 2 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '-75px' }}>
        <span className="text-secondary">10K visitors</span>
      </div>
    </div>
  );
};

export default SessionsChart;