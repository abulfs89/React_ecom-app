import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const cartItemCount = 3;

  return (
    <nav className="navbar">
      <div className="navbar-logo">ShopOn</div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="navbar-cart">
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-item-count">{cartItemCount}</span>
        <span className="cart-text">Cart</span>
      </div>
      <div className="navbar-links">
        <a href="/register">Register</a>
        <a href="/signin">Sign In</a>
      </div>
      <div className="navbar-banner">
        <p>Don&apos;t miss our special sale! Limited time offer.</p>
      </div>
    </nav>
  );
};

export default Navbar;
