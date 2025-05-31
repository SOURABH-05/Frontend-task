import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import "../styles/header.scss";
import Newproduct from "./Newproduct";

const Header = ({ searchQuery, onSearch, onAddProduct }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="header">
      <h1 className="header__title">Product List</h1>

      <div className="header__actions">
        <div className="search-container">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="input"
          />
        </div>

        <button className="btn btn--accent" onClick={() => setShowForm(true)}>
          <Plus size={18} />
          Add New Product
        </button>

        
      </div>
       {showForm && <Newproduct onClose={() => setShowForm(false)} />}
    </div>
    
  );
};

export default Header;