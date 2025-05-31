import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Settings from './components/Settings';
import './styles/main.scss';


function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const contentClass = `content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`;

  return (
    <Router>
      <div className="app-container">
        <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
        <div className={contentClass}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
             <Route path="/products" element={<Products />} />
            <Route path="/settings" element={<Settings />} /> 
          </Routes>
         

        </div>
      </div>
    </Router>
  );
}

export default App;
