import React, { useState } from 'react';
import { X, Star, Folder, DollarSign, Building, Clock } from 'lucide-react';
import ProductIcon from './ProductIcon'; // ✅ IMPORT HERE
import '../styles/NewProduct.scss';

const ProductForm = ({ onClose, initialData }) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    icon: initialData?.icon || '', // ✅ use icon instead of photo
    category: initialData?.category || '',
    price: initialData?.price || '',
    company: initialData?.company || '',
    status: initialData?.status || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-form">
        <div className="modal-header">
          <h2>Edit product</h2>
          <button onClick={onClose}><X /></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label><Star size={16} /> Product name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Product photo</label>
            <div className="photo-preview-wrapper centered">
              <div className="circle-preview">
                <ProductIcon type={formData.icon} />
              </div>
              <div className="photo-actions">
                <span onClick={() => alert("Edit icon feature")}>Edit</span> | 
                <span onClick={() => setFormData({ ...formData, icon: '' })}>Delete</span>
              </div>
            </div>
          </div>

          {/* Other form groups */}
          <div className="form-group">
            <label><Folder size={16} /> Category</label>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option>Accessories</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Home</option>
              <option>Office</option>
            </select>
          </div>

          <div className="form-group">
            <label><DollarSign size={16} /> Price (in $)</label>
            <input type="number" name="price" value={formData.price} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label><Building size={16} /> Company</label>
            <select name="company" value={formData.company} onChange={handleChange}>
              <option>Google</option>
              <option>Apple</option>
              <option>Microsoft</option>
              <option>Samsung</option>
              <option>Amazon</option>
            </select>
          </div>

          <div className="form-group">
            <label><Clock size={16} /> Status</label>
            <select name="status" value={formData.status} onChange={handleChange}>
              <option>In Stock</option>
              <option>Out of Stock</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">Save</button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
