import React from 'react';
import './Notification.css';

const Notification = () => {
  
  const notifications = {
    today: [
      { id: 1, icon: '📦', message: 'your order is being packed', read: false },
      { id: 2, icon: '💵', message: 'payment process succeeded', read: false }
    ],
    yesterday: [
      { id: 3, icon: '📦', message: 'Your package has arrived, please confirm if you have received it.', read: false, hasAction: true },
      { id: 4, icon: '🚚', message: 'Your package is on the way', read: false }
    ]
  };

  // Handler untuk menandai notifikasi sebagai dibaca
  const handleMarkAsRead = (id) => {
    // Implementasi untuk menandai notifikasi sebagai dibaca
    console.log(`Marking notification ${id} as read`);
  };

  // Handler untuk konfirmasi penerimaan paket
  const handleConfirm = (id) => {
    // Implementasi untuk konfirmasi penerimaan paket
    console.log(`Confirming receipt for notification ${id}`);
  };

  return (
    <div className="notification-container">
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
      <div className="notification-content">
        <h2 className="notification-section-title">Today</h2>
        <div className="notification-list">
          {notifications.today.map((notification) => (
            <div key={notification.id} className="notification-item">
              <div className="notification-icon">{notification.icon}</div>
              <div className="notification-message">{notification.message}</div>
              <button 
                className="notification-close" 
                onClick={() => handleMarkAsRead(notification.id)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <h2 className="notification-section-title">Yesterday</h2>
        <div className="notification-list">
          {notifications.yesterday.map((notification) => (
            <div key={notification.id} className="notification-item">
              <div className="notification-icon">{notification.icon}</div>
              <div className="notification-message">{notification.message}</div>
              {notification.hasAction && (
                <button 
                  className="notification-confirm-btn" 
                  onClick={() => handleConfirm(notification.id)}
                >
                  confirm
                </button>
              )}
              <button 
                className="notification-close" 
                onClick={() => handleMarkAsRead(notification.id)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;