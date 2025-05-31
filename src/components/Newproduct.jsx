import React, { useState } from 'react';
import { X, Star, Image, Folder, DollarSign, Building, Clock } from 'lucide-react';
import '../styles/NewProduct.scss';

const ProductForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: 'Watch',
    photo: null,
    category: 'Accessories',
    price: '815',
    company: 'Google',
    status: 'In Stock',
  });
  const [photoPreview, setPhotoPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, photo: file });
    const reader = new FileReader();
    reader.onload = () => setPhotoPreview(reader.result);
    reader.readAsDataURL(file);
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
          <h2>Add new product</h2>
          <button onClick={onClose}><X /></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label><Star size={16} /> Product name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label><Image size={16} /> Product photo</label>
            <div className="upload-area" onClick={() => document.getElementById('photo').click()}>
              {photoPreview ? (
                <img src={photoPreview} alt="Preview" />
              ) : (
                <>
                  <Image size={36} />
                  <p><span>Click to upload</span> or drag and drop</p>
                  <p className="hint">SVG, PNG, JPG or GIF (max. 800 × 400px)</p>
                </>
              )}
              <input id="photo" type="file" accept="image/*" onChange={handleFileChange} hidden />
            </div>
          </div>
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
