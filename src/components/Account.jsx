import React, { useState } from 'react';
import './Account.css';

const Account = () => {
  // State untuk data pengguna
  const [userData, setUserData] = useState({
    firstName: 'Kendall',
    lastName: 'Jenner',
    email: 'Kendallwkwkjenner@gmail.com',
    address: 'Jl. Ajibarang - Wangon, Winong, Karangbawang, Kec. Ajibarang, Kabupaten Banyumas, Jawa Tengah 53163',
    phoneNumber: '812 3456 7890',
    dateOfBirth: '03/17/1995',
    location: 'Jawa Tengah',
    postalCode: '53163',
    gender: 'female'
  });

  const [formData, setFormData] = useState({ ...userData });

  // Handler untuk perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handler untuk perubahan gender
  const handleGenderChange = (gender) => {
    setFormData({
      ...formData,
      gender
    });
  };

  // Handler untuk menyimpan perubahan
  const handleSaveChanges = () => {
    setUserData({ ...formData });
    alert('Perubahan berhasil disimpan!');
  };

  // Handler untuk membatalkan perubahan
  const handleDiscardChanges = () => {
    setFormData({ ...userData });
    alert('Perubahan dibatalkan!');
  };

  return (
    <div className="account-container">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <button className="menu-btn">Menu</button>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="header-right">
          <button className="icon-btn user-btn">👤</button>
          <button className="icon-btn cart-btn">🛒</button>
        </div>
      </header>

      {/* Main Content */}
      <div className="account-content">
        <button className="back-button">←</button>

        <div className="account-profile">
          <div className="profile-left">
            <div className="profile-image">
              <img src="https://via.placeholder.com/150" alt="Profile" />
            </div>
            <h2 className="profile-name">{userData.firstName} {userData.lastName}</h2>
            <button className="profile-info-btn">Personal Information</button>
          </div>

          <div className="profile-right">
            <div className="gender-selection">
              <span>Male</span>
              <label className="radio-container">
                <input 
                  type="radio" 
                  name="gender" 
                  checked={formData.gender === 'male'} 
                  onChange={() => handleGenderChange('male')} 
                />
                <span className="radio-checkmark"></span>
              </label>
              
              <span>Female</span>
              <label className="radio-container">
                <input 
                  type="radio" 
                  name="gender" 
                  checked={formData.gender === 'female'} 
                  onChange={() => handleGenderChange('female')} 
                />
                <span className="radio-checkmark"></span>
              </label>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input 
                  type="text" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleInputChange} 
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input 
                  type="text" 
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleInputChange} 
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
              />
            </div>

            <div className="form-group full-width">
              <label>Address</label>
              <textarea 
                name="address" 
                value={formData.address} 
                onChange={handleInputChange} 
              ></textarea>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <div className="phone-input">
                  <span className="country-code">+62</span>
                  <input 
                    type="text" 
                    name="phoneNumber" 
                    value={formData.phoneNumber} 
                    onChange={handleInputChange} 
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input 
                  type="text" 
                  name="dateOfBirth" 
                  value={formData.dateOfBirth} 
                  onChange={handleInputChange} 
                  className="date-input"
                />
                <span className="calendar-icon">📅</span>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Location</label>
                <input 
                  type="text" 
                  name="location" 
                  value={formData.location} 
                  onChange={handleInputChange} 
                />
              </div>
              <div className="form-group">
                <label>Postal Code</label>
                <input 
                  type="text" 
                  name="postalCode" 
                  value={formData.postalCode} 
                  onChange={handleInputChange} 
                />
              </div>
            </div>

            <div className="action-buttons">
              <button 
                className="discard-btn" 
                onClick={handleDiscardChanges}
              >
                Discard Change
              </button>
              <button 
                className="save-btn" 
                onClick={handleSaveChanges}
              >
                Save Change
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;