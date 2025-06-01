import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  // Data produk dalam keranjang
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Puma Speedcat TTF',
      size: 40,
      price: 1999000,
      quantity: 1,
      checked: true,
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 2,
      name: 'Converse Chuck Taylor All Star',
      size: 38,
      price: 999000,
      quantity: 1,
      checked: true,
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 3,
      name: 'Nike Air Force 1 Low',
      size: 39,
      price: 2379000,
      quantity: 1,
      checked: false,
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 4,
      name: 'New Balance 574 VERGREEN',
      size: 41,
      price: 1599000,
      quantity: 1,
      checked: false,
      image: 'https://via.placeholder.com/100'
    }
  ]);

  // State untuk ringkasan pesanan
  const [orderSummary, setOrderSummary] = useState({
    subtotal: 0,
    shipping: 15000,
    taxes: 0,
    discount: -50000,
    total: 0
  });

  // Menghitung subtotal dan total
  React.useEffect(() => {
    const checkedItems = cartItems.filter(item => item.checked);
    const subtotal = checkedItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const total = subtotal + orderSummary.shipping + orderSummary.taxes + orderSummary.discount;
    
    setOrderSummary({
      ...orderSummary,
      subtotal,
      total
    });
  }, [cartItems]);

  // Handler untuk mengubah jumlah produk
  const handleQuantityChange = (id, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  // Handler untuk mengubah status checkbox
  const handleCheckboxChange = (id) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    }));
  };

  // Format harga dalam Rupiah
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // Handler untuk menghapus semua item dari keranjang
  const handleClearCart = () => {
    if (window.confirm('Apakah Anda yakin ingin mengosongkan keranjang belanja?')) {
      setCartItems([]);
    }
  };

  // Menghitung jumlah item yang dipilih
  const checkedItemsCount = cartItems.filter(item => item.checked).length;

  return (
    <div className="cart-container">
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
      <div className="cart-content">
        <div className="cart-grid">
          {/* Cart Items */}
          <div className="cart-items">
            <div className="cart-header">
              <div className="cart-header-checkbox"></div>
              <div className="cart-header-product">Product</div>
              <div className="cart-header-price">Price</div>
              <div className="cart-header-qty">Qty</div>
              <div className="cart-header-subtotal">Subtotal</div>
            </div>

            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-checkbox">
                  <input 
                    type="checkbox" 
                    checked={item.checked} 
                    onChange={() => handleCheckboxChange(item.id)} 
                  />
                </div>
                <div className="cart-item-product">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>size {item.size}</p>
                  </div>
                </div>
                <div className="cart-item-price">
                  {formatPrice(item.price)} IDR
                </div>
                <div className="cart-item-qty">
                  <button 
                    className="qty-btn" 
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button 
                    className="qty-btn" 
                    onClick={() => handleQuantityChange(item.id, -1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                </div>
                <div className="cart-item-subtotal">
                  {formatPrice(item.price * item.quantity)} IDR
                </div>
              </div>
            ))}

            <div className="cart-footer">
              <button className="clear-cart-btn" onClick={handleClearCart}>
                Clear Shopping Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="order-summary">
            <h2 className="summary-title">Order Summary</h2>
            
            <div className="summary-row">
              <span>Items</span>
              <span>{checkedItemsCount}</span>
            </div>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>{formatPrice(orderSummary.subtotal)}</span>
            </div>
            
            <div className="summary-row">
              <span>Shipping</span>
              <span>{formatPrice(orderSummary.shipping)}</span>
            </div>
            
            <div className="summary-row">
              <span>Taxes</span>
              <span>{orderSummary.taxes}</span>
            </div>
            
            <div className="summary-row discount">
              <span>Discount</span>
              <span>{formatPrice(orderSummary.discount)}</span>
            </div>
            
            <div className="summary-divider"></div>
            
            <div className="summary-row total">
              <span>Total</span>
              <span>{formatPrice(orderSummary.total)}</span>
            </div>
            
            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;