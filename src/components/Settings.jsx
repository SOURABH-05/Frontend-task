import React, { useState } from 'react';
import '../styles/Settings.scss';
import { Mail, User, Image, Edit, Bell, Info } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <>
    <div className='main-setting'>
      <header className='top-header'>
        <span><h1>Settings</h1></span>
        <span><button className="save-button">Save</button></span>
      </header>

      <div className='container'>
        <div className='left-side'>
          <div className="tab-menu">
            <button
              className={`tab-button ${activeTab === 'personal' ? 'active' : ''}`}
              onClick={() => setActiveTab('personal')}
            >
              <User size={14} /> Personal Information
            </button>
            <button
              className={`tab-button ${activeTab === 'notifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('notifications')}
            >
              <Bell size={14} /> Notifications
            </button>
          </div>
        </div>

        <div className='right-side'>
          {activeTab === 'personal' && (
            <div className="form-card">
              <div className="form-group">
                <label><User size={16} /> Full name</label>
                <input type="text" placeholder="John Carter" />
              </div>

              <div className="form-group">
                <label><Mail size={16} /> Email address</label>
                <input type="email" placeholder="john@dashdark.com" />
              </div>

              <div className="form-group upload">
                <label><Image size={16} /> Photo</label>
                <div className="upload-box">
                  <div className="upload-icon">
                    <Image size={24} />
                  </div>
                  <span className="upload-text">
                    <span>Click to upload</span> or drag and drop<br />
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </span>
                </div>
              </div>

              <div className="form-group">
                <label><Edit size={16} /> Short description</label>
                <textarea placeholder="Write a short bio about you..." rows="3"></textarea>
              </div>

              
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="notifications-wrapper">
              <div className="notification-section">
                <h4>General notifications</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                <div className="notification-card">
                  {['I\'m mentioned in a message', 'Someone replies to any message', "I\'m assigned a task", 'A task is overdue'].map((text, index) => (
                    <div className="notification-row" key={index}>
                      <span><Info size={14} /> {text}</span>
                      <div className="toggles">
                        <button className="toggle-btn active">In-app</button>
                        <button className="toggle-btn">Email</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="notification-section">
                <h4>Summary notifications</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                <div className="notification-card">
                  {['Daily summary', 'Weekly summary', 'Monthly summary'].map((text, index) => (
                    <div className="notification-row" key={index}>
                      <span><Info size={14} /> {text}</span>
                      <div className="toggles">
                        <button className="toggle-btn active">In-app</button>
                        <button className="toggle-btn">Email</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
    </>
  );
};

export default Settings;