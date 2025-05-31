import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Settings, Home, Star } from 'lucide-react';
import '../styles/Sidebar.scss';
import logo from "../assest/Logo Icon.png";
import men from "../assest/Group 1000004507.png";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation(); // To track current path

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen);
  };

  const sidebarClass = `sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'open' : ''}`;
  const toggleButtonClass = `toggle-button ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'open' : ''}`;

  return (
    <>
      <div className={sidebarClass}>
        <div className="sidebar-header">
          <div className="logo">
            <img src={logo} alt="Chart Preview" />
          </div>
          <div className="logo-text">Dashbark X</div>
        </div>

        <div className="sidebar-content active">
          <Link 
            to="/" 
            className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
          >
            <div className="nav-icon">
              <Home size={20} />
            </div>
            <div className="nav-text">Dashboard</div>
          </Link>

          <Link 
            to="/products" 
            className={`nav-item ${location.pathname === '/products' ? 'active' : ''}`}
          >
            <div className="nav-icon">
              <Star size={20} />
            </div>
            <div className="nav-text">Product List</div>
          </Link>

          <Link 
            to="/settings" 
            className={`nav-item ${location.pathname === '/settings' ? 'active' : ''}`}
          >
            <div className="nav-icon">
              <Settings size={20} />
            </div>
            <div className="nav-text">Settings</div>
          </Link>
        </div>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="avatar"></div>
            <div className="user-info">
              <div className="user-name">John Carter</div>
            </div>
          </div>
        </div>
      </div>

      <button 
        className={toggleButtonClass} 
        onClick={window.innerWidth < 768 ? toggleMobileSidebar : toggleSidebar}
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
    </>
  );
};

export default Sidebar;
