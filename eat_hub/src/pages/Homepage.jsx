import React from "react";
import { Search } from "lucide-react";
import Maindish from "../assets/main_dish.png";
import dish1 from "../assets/dish1.png";
import dish2 from "../assets/dish2.png";
import dish3 from "../assets/dish3.png";
import dish4 from "../assets/dish4.png";
import dish5 from "../assets/Ellipse.png";
import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Homepage.css";
import FeaturesSection from "../Components/Featurespage";
import TopHomeFood from "../Components/TopHomeFood";
import TopRestaurants from "../Components/TopRestaurants.jsx";
import BecomeAPartner from "../Components/BecomeAPartner.jsx";
import FoodOffers from "../Components/FoodOffers.jsx";
import TopChefs from "../Components/TopChefs.jsx";

export default function Homepage() {
  return (
    <div className="homepage-container">
      {/* Navbar - Now with Orange Background */}
      <header className="navbar navbar-expand-md navbar-light bg-orange py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <img
              src={logo}
              alt="Logo"
              className="img-fluid"
              style={{ width: "70px", height: "70px" }}
            />
          </a>

          <nav className="d-none d-md-flex gap-4 fw-medium">
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

          <button className="btn btn-outline-dark btn-sm">Sign in</button>
        </div>
      </header>

      {/* Hero Section - Reduced Height */}
      <section className="hero-section position-relative">
        {/* Orange Background Shape */}
        <div className="orange-bg"></div>

        <div className="container d-flex flex-column flex-md-row align-items-center gap-5 position-relative z-2">
          {/* Left Content - Text & Buttons */}
          <div className="left-content col-md-6 text-center text-md-start">
            <h1 className="hero-title">
              Experience the joy of dining your way with
            </h1>
            <p className="hero-subtitle">
              Discover the best local restaurants and professional chefs, all in one place.
              Your next amazing meal is just a click away.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3 mt-4">
              <button className="btn btn-outline-orange px-4 py-2">
                Explore menu
              </button>
              <button className="btn btn-primary-orange text-white px-4 py-2">
                BOOK A CHEF
              </button>
            </div>
          </div>

          {/* Right Content - Dishes */}
          <div className="right-content col-md-6 d-flex flex-column align-items-center">
            {/* Main Dish */}
            <div className="main-dish-container rounded-circle border border-4 border-warning shadow-lg overflow-hidden">
              <img src={Maindish} alt="Main Dish" className="main-dish img-fluid" />
            </div>

            {/* Floating Dishes Container - Positioned Around Main Dish */}
            <div className="floating-dishes-wrapper position-relative mt-4">
              <div className="floating-dish dish-top-left">
                <img src={dish1} alt="Dish 1" className="img-fluid w-100 h-100 object-cover" />
              </div>
              <div className="floating-dish dish-mid-left">
                <img src={dish2} alt="Dish 2" className="img-fluid w-100 h-100 object-cover" />
              </div>
              <div className="floating-dish dish-bottom-center">
                <img src={dish3} alt="Dish 3" className="img-fluid w-100 h-100 object-cover" />
              </div>
              <div className="floating-dish dish-mid-right">
                <img src={dish4} alt="Dish 4" className="img-fluid w-100 h-100 object-cover" />
              </div>
              <div className="floating-dish dish-top-right">
                <img src={dish5} alt="Dish 5" className="img-fluid w-100 h-100 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="search-section py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="input-group mt-3 shadow-sm rounded-pill overflow-hidden">
                <span className="input-group-text bg-white border-0">
                  <Search size={20} className="text-secondary" />
                </span>
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Search for dishes, restaurants, or chefs..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />
      <TopHomeFood />
      <TopRestaurants />
      <BecomeAPartner />
      <FoodOffers />
      <TopChefs />
    </div>
  );
}