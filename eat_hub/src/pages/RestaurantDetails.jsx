// src/pages/RestaurantDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import "./RestaurantDetails.css";

// Assets
import RestaurantProfile from "../assets/RestaurantProfile.png";
import dish1 from "../assets/dish1.png";
import dish2 from "../assets/dish2.png";
import dish3 from "../assets/dish3.png";
import dish4 from "../assets/dish4.png";
import logo from "../assets/logo.png";

// Components
import BecomeAPartner from "../components/BecomeAPartner";
import FoodOffers from "../components/FoodOffers";

export default function RestaurantDetails() {
  const { id } = useParams();

  return (
    <div className="restaurant-details-page">
      {/* Navbar */}
      <header className="navbar navbar-expand-md navbar-light site-header">
        <div className="container d-flex justify-content-between align-items-center">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <img
              src={logo}
              alt="Logo"
              className="img-fluid"
              style={{ width: "70px", height: "70px" }}
            />
          </a>

          <nav className="d-flex gap-4 fw-medium">
            <a href="#" className="text-decoration-none nav-link-custom">
              Restaurant
            </a>
            <a href="#" className="text-decoration-none nav-link-custom">
              Book a Chef
            </a>
            <a href="#" className="text-decoration-none nav-link-custom">
              Become a Partner
            </a>
          </nav>

          <button className="btn btn-dark btn-sm">Sign in</button>
        </div>
      </header>

      {/* ===== Restaurant Header ===== */}
        <div className="restaurant-header">
          {/* Left: Restaurant Image */}
          <div className="restaurant-image">
            <img src={RestaurantProfile} alt="Restaurant" />
          </div>

          {/* Right: Card Info */}
          <div className="card-info-box">
            {/* Verified Badge */}
            <div className="d-flex justify-content-end mb-2 verified-badge-container">
              <span className="badge-outline">
                <i className="fas fa-check-circle"></i> verified
              </span>
            </div>

            {/* Name + Address */}
            <h3 className="fw-bold mb-1">Restaurant Name</h3>
            <p className="mb-1 text-muted">0245, near Delux tower, hyd</p>

            {/* Rating with star */}
            <div className="d-flex align-items-center mb-2 rating-container">
              <span className="fw-bold me-2">7.9</span>
              <i className="fas fa-star"></i>
            </div>

            {/* Description */}
            <p className="text-muted small mb-0">
              Lorem ipsum dolor sit amet consectetur. Fermentum dapibus urna morbi
              egestas volutpat adipiscing posuere morbi odio. Netus est in fames
              lectus volutpat enim. Egestas id mattis at vitae vel libero. Nisl
              vel donec quisque aenean turpis sagittis.
            </p>
          </div>
        </div>


      {/* ===== About Section ===== */}
<div className="card shadow-sm p-4 mb-4 about-section">
  <div className="row align-items-center">
    <div className="col-md-8">
      <h5 className="fw-bold">About Restaurant {id}</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur. Fermentum dapibus urna morbi
              egestas volutpat adipiscing posuere morbi odio. Netus est in fames
              lectus volutpat enim. Egestas id mattis at vitae vel libero. Nisl
              vel donec quisque aenean turpis sagittis.
      </p>
    </div>
    <div className="col-md-4 text-center">
      <div className="qr-placeholder"></div> {/* empty QR box */}
    </div>
  </div>
</div>


      {/* ===== Search Bar ===== */}
      <div className="input-group shadow-sm mb-4">
        <span className="input-group-text bg-white border-0">🔍</span>
        <input
          type="text"
          className="form-control border-0"
          placeholder="Search menu items..."
        />
      </div>

      {/* ===== Top Popular Items ===== */}
      <div className="section-title d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Top Popular Items</h5>
        <a href="#" className="text-orange text-decoration-none fw-medium">
          View All
        </a>
      </div>
      <div className="row g-3 mb-4">
        {[dish1, dish2, dish3, dish4].map((dish, index) => (
          <div className="col-6 col-md-3" key={index}>
            <div className="card menu-card shadow-sm">
              <img src={dish} alt="Dish" className="card-img" />
              <div className="overlay">
                <span className="play-icon">▶</span>
                <div className="card-info">
                  <h6 className="fw-bold mb-1">Delicious Dish</h6>
                  <p className="small mb-0">$12.99</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Our Menu Items ===== */}
      <div className="section-title d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Our Menu Items</h5>
        <a href="#" className="text-orange text-decoration-none fw-medium">
          View All
        </a>
      </div>
      <div className="row g-3 mb-4">
        {[dish2, dish3, dish4, dish1].map((dish, index) => (
          <div className="col-6 col-md-3" key={index}>
            <div className="card menu-card shadow-sm">
              <img src={dish} alt="Dish" className="card-img" />
              <div className="overlay">
                <span className="play-icon">▶</span>
                <div className="card-info">
                  <h6 className="fw-bold mb-1">Special Dish</h6>
                  <p className="small mb-0">$15.49</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Food Offers Banner ===== */}
      <div className="full-width-banner">
        <FoodOffers mode="banner" />
      </div>

      {/* ===== Become a Partner ===== */}
      <div className="container py-4">
        <BecomeAPartner />
      </div>

      {/* ===== Footer ===== */}
      <footer className="footer-ribbon">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
              <p className="mb-0">&copy; 2025 Afri Bites. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="social-icons d-flex justify-content-center justify-content-md-end gap-3">
                <a href="#" className="text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-x-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Circular Placeholders */}
          <div className="d-flex justify-content-center mt-3">
            <div className="image-circle"></div>
            <div className="image-circle"></div>
            <div className="image-circle"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
