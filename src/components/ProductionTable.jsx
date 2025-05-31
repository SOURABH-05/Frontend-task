import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp,
  Edit,
  Trash2
} from 'lucide-react';
import ProductIcon from './ProductIcon';
import CompanyIcon from './CompanyIcon';
import Editproduct from "./Editproduct"
import "../styles/productiontable.scss"


const ProductTable = ({
  products,
  sortField,
  sortDirection,
  onSort,
  onEdit,
  onDelete
}) => {
  const renderSortIcon = (field) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? (
      <ChevronUp size={16} className="sort-icon" />
    ) : (
      <ChevronDown size={16} className="sort-icon" />
    );
  };
  const [showForm, setShowForm] = useState(false);
  

  return (
    <div className="product-table__container">
      <table className="product-table">
        <thead className="product-table__header">
          <tr>
            <th className="sortable" onClick={() => onSort('name')}>
              <div className="flex-row items-center">
                # Product Name {renderSortIcon('name')}
              </div>
            </th>
            <th className="sortable" onClick={() => onSort('category')}>
              <div className="flex-row items-center">
                Category {renderSortIcon('category')}
              </div>
            </th>
            <th className="sortable" onClick={() => onSort('price')}>
              <div className="flex-row items-center">
                Price {renderSortIcon('price')}
              </div>
            </th>
            <th className="sortable" onClick={() => onSort('company')}>
              <div className="flex-row items-center">
                Company {renderSortIcon('company')}
              </div>
            </th>
            <th className="sortable" onClick={() => onSort('status')}>
              <div className="flex-row items-center">
                Status {renderSortIcon('status')}
              </div>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="product-table__row">
              <td>
                <div className="product-table__cell--product">
                  <div className="product-icon">
                    <ProductIcon type={product.icon} />
                  </div>
                  <span className="product-name">{product.name}</span>
                </div>
              </td>
              <td>{product.category}</td>
              <td className="product-table__cell--price">${product.price}</td>
              <td>
                <div className="product-table__cell--company">
                  <div className="company-icon">
                    <CompanyIcon company={product.company} />
                  </div>
                  {product.company}
                </div>
              </td>
              <td>
                <div className={`status-pill status-pill--${product.status.replace(/\s+/g, '-')}`}>
                  {product.status}
                </div>
              </td>
              <td>
                <div className="product-table__cell--actions">
                  <button 
                    className="btn btn--icon" 
                    onClick={() => setShowForm(true)}
                  >
                    <Edit size={16}/>
                  </button>
                     {showForm && <Editproduct onClose={() => setShowForm(false)} />}
                  <button 
                    className="btn btn--icon" 
                    onClick={() => onDelete(product.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;