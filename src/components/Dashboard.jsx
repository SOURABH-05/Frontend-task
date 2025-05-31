import React from 'react';
import { Eye, Users, UserPlus, Package } from 'lucide-react';
import StatCard from './StatCard';
import RevenueChart from './RevenueChart';
import ProfitChart from './ProfitChart';
import SessionsChart from './SessionsChart';
import '../styles/Dashboard.scss';

const Dashboard = () => {
  return (
    <div>
      <div className="dashboard-header">
        <h1>Welcome back, John</h1>
        <p>Manage your advertising ROI and report website traffic.</p>
      </div>
      
      <div className="stats-grid">
        <StatCard 
          title="Pageviews" 
          value="50.8K" 
          percentage={4.3} 
          icon={<Eye size={16} />} 
        />
        <StatCard 
          title="Monthly users" 
          value="23.6K" 
          percentage={-5.1} 
          icon={<Users size={16} />} 
        />
        <StatCard 
          title="New sign ups" 
          value="756" 
          percentage={3.2} 
          icon={<UserPlus size={16} />} 
        />
        <StatCard 
          title="Subscriptions" 
          value="2.3K" 
          percentage={10.3} 
          icon={<Package size={16} />} 
        />
      </div>
      
      <div className="dashboard-charts">
        <RevenueChart />
        <div>
          <ProfitChart />
          <SessionsChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;