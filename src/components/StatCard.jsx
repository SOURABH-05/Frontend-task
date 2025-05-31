import React from 'react';
import '../styles/Dashboard.scss';

const StatCard = ({ title, value, percentage, icon }) => {
  const percentageClass = percentage > 0 
    ? 'stat-percentage positive' 
    : percentage < 0 
      ? 'stat-percentage negative' 
      : 'stat-percentage neutral';
  
  const formattedPercentage = percentage > 0 
    ? `+${percentage}%` 
    : `${percentage}%`;
  
  return (
    <div className="stat-card">
      <div className="stat-header">
        <div className="stat-title">
          <span className="icon">{icon}</span>
          {title}
        </div>
      </div>
      <div className="stat-value">{value}</div>
      <div className={percentageClass}>{formattedPercentage}</div>
    </div>
  );
};

export default StatCard;