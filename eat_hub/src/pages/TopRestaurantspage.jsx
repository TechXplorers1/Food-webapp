import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/TopRestaurantspage.css";
import TopRestaurants from "../Components/TopRestaurants.jsx";
import FoodOffers from "../Components/FoodOffers.jsx";
import BecomeAPartner from "../Components/BecomeAPartner.jsx";
import TopChefs from "../Components/TopChefs";

// Import your assets
import logo from "../assets/logo.png";
import HeroImage from "../assets/RestaurantPageHeroBanner.png";
import Dish1 from "../assets/dish1.png";
import Dish2 from "../assets/dish2.png";
import Dish3 from "../assets/dish3.png";

export default function TopRestaurantsPage() {
  return (
    <div className="homepage">

      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm custom-navbar">
  <div className="container">
    {/* Logo */}
    <a className="navbar-brand" href="#">
      <img src={logo} alt="Logo" className="logo-img" />
    </a>

    {/* Toggler (for mobile) */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <nav className="d-flex gap-4 fw-medium">
        <a href="#" className="text-decoration-none nav-link-custom">Restaurant</a>
        <a href="#" className="text-decoration-none nav-link-custom">Book a Chef</a>
        <a href="#" className="text-decoration-none nav-link-custom">Become a Partner</a>
    </nav>

    <button className="btn btn-outline-dark btn-sm">Sign in</button>

  </div>
</nav>


      {/* ===== Hero Banner ===== */}
      <section
        className="hero-section text-center d-flex align-items-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="overlay"></div>
        <div className="container hero-content text-white">
          <h1 className="fw-bold">FIND YOUR NEXT PERFECT MEAL</h1>
          <p className="lead">Book Restaurants, Discover Top Chefs, Enjoy Perfect Food Experiences</p>
          <div className="mt-3">
            <input type="text" className="form-control w-50 mx-auto" placeholder="Search..." />
          </div>
        </div>
      </section>

      {/* ===== Top Restaurants ===== */}
      <TopRestaurants />

      {/* ===== Top Restaurants Jollof Rice Section ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="fw-bold">Top Restaurants Jollof Rice</h4>
          </div>
          <div className="row">
            {[Dish1, Dish2, Dish3].map((dish, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <div className="jollof-card position-relative shadow-sm rounded overflow-hidden">
                  <img src={dish} className="w-100 h-100" alt="jollof" />
                  <div className="jollof-overlay">
                    <h5 className="fw-bold">Jollof Rice {i + 1}</h5>
                    <p className="small">Delicious African-style Jollof Rice.</p>
                    <span className="fw-bold">$60</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Food Offers Banner ===== */}
      <FoodOffers mode="banner" />

      {/* ===== Become a Partner ===== */}
      <BecomeAPartner />

      {/* ===== Top Chefs ===== */}
      <TopChefs />

      {/* ===== Footer ===== */}
      <footer className="footer-orange text-white py-3">
        <div className="container">
          <p className="mb-0">© 2025 Jollof. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
}
