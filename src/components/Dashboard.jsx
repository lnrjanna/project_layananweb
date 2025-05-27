import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // Data untuk carousel
  const carouselItems = [
    {
      id: 1,
      title: 'NEW STYLE ON SALE',
      subtitle: 'UP TO 20% OFF',
      bgColor: '#d4e7c5',
    },
    {
      id: 2,
      title: 'SPECIAL OFFER',
      subtitle: 'FREE SHIPPING',
      bgColor: '#d4b8c7',
    },
    {
      id: 3,
      title: 'NEW COLLECTION',
      subtitle: 'DISCOVER NOW',
      bgColor: '#e8f380',
    },
  ];

  // Data untuk produk rekomendasi
  const recommendedProducts = [
    {
      id: 1,
      name: 'Puma Speedcat TFF',
      price: 1999000,
      image: '/images/puma-speedcat.jpg',
    },
    {
      id: 2,
      name: 'Puma Mirage Tech',
      price: 838300,
      image: '/images/puma-mirage.jpg',
    },
    {
      id: 3,
      name: 'Nike Court Lite 4',
      price: 1149000,
      image: '/images/nike-court.jpg',
    },
    {
      id: 4,
      name: 'Nike Air Force 1 Low',
      price: 2375000,
      image: '/images/nike-airforce.jpg',
    },
    {
      id: 5,
      name: 'Converse One Star 95',
      price: 1299000,
      image: '/images/converse-onestar.jpg',
    },
    {
      id: 6,
      name: 'Adidas Retropy E5',
      price: 880000,
      image: '/images/adidas-retropy.jpg',
    },
  ];

  // Data untuk produk baru
  const newArrivals = [
    {
      id: 1,
      name: 'New Balance 574 EV',
      price: 1599000,
      image: '/images/nb-574.jpg',
    },
    {
      id: 2,
      name: 'Reebok Royal Prime 2',
      price: 499000,
      image: '/images/reebok-royal.jpg',
    },
    {
      id: 3,
      name: 'Converse Chuck Taylor',
      price: 999000,
      image: '/images/converse-chuck.jpg',
    },
    {
      id: 4,
      name: 'Puma Sneakers All Day',
      price: 829300,
      image: '/images/puma-sneakers.jpg',
    },
    {
      id: 5,
      name: 'Adidas Trail Running',
      price: 1300000,
      image: '/images/adidas-trail.jpg',
    },
    {
      id: 6,
      name: 'NEW BALANCE 327',
      price: 1599000,
      image: '/images/nb-327.jpg',
    },
  ];

  // Data untuk brand populer
  const popularBrands = [
    { id: 1, name: 'PUMA', logo: '/images/puma-logo.png' },
    { id: 2, name: 'NIKE', logo: '/images/nike-logo.png' },
    { id: 3, name: 'ADIDAS', logo: '/images/adidas-logo.png' },
    { id: 4, name: 'CONVERSE', logo: '/images/converse-logo.png' },
    { id: 5, name: 'NEW BALANCE', logo: '/images/nb-logo.png' },
    { id: 6, name: 'REEBOK', logo: '/images/reebok-logo.png' },
  ];

  // Format harga dalam Rupiah
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <div className="dashboard">
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

      {/* Carousel */}
      <div className="carousel-container">
        <button className="carousel-arrow left">❮</button>
        <div className="carousel-slide" style={{ backgroundColor: carouselItems[0].bgColor }}>
          <div className="carousel-content">
            <h2>{carouselItems[0].title}</h2>
            <h3>{carouselItems[0].subtitle}</h3>
          </div>
          <div className="carousel-image">
          </div>
        </div>
        <button className="carousel-arrow right">❯</button>
        <div className="carousel-indicators">
          {carouselItems.map((item, index) => (
            <span 
              key={item.id} 
              className={`indicator ${index === 0 ? 'active' : ''}`}
            ></span>
          ))}
        </div>
      </div>

      {/* Recommended Products */}
      <section className="product-section">
        <h2 className="section-title">Recommended For You</h2>
        <div className="product-grid">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <div className="image-placeholder"></div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price-cart">
                  <p className="product-price">Rp {formatPrice(product.price)}</p>
                  <button className="add-to-cart">🛒</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="product-section">
        <h2 className="section-title">New Arrival</h2>
        <div className="product-grid">
          {newArrivals.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <div className="image-placeholder"></div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price-cart">
                  <p className="product-price">Rp {formatPrice(product.price)}</p>
                  <button className="add-to-cart">🛒</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Brands */}
      <section className="brand-section">
        <h2 className="section-title">Brand Popular</h2>
        <div className="brand-grid">
          {popularBrands.map((brand) => (
            <div key={brand.id} className="brand-card">
              <div className="brand-logo">
                <div className="logo-placeholder">{brand.name}</div>
              </div>
              <button className="see-all-btn">See All</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>D'SAPATUAN</h2>
            <div className="subscribe">
              <p>Subscribe now</p>
              <div className="subscribe-form">
                <input type="email" placeholder="Your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h3>Information</h3>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Store search</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Events</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Helpful links</h3>
              <ul>
                <li><a href="#">Services</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Our service</h3>
              <ul>
                <li><a href="#">Rapid delivery</a></li>
                <li><a href="#">Order</a></li>
                <li><a href="#">Worldwide shipping</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Contact Us</h3>
              <ul>
                <li>📞 +62 XXX XXXX XXX</li>
                <li>📧 dsapatuan@email.id</li>
              </ul>
              <div className="social-icons">
                <a href="#">FB</a>
                <a href="#">IG</a>
                <a href="#">TW</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>©2023 D'Sapatuan | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;