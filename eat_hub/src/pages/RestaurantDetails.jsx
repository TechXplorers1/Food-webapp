// src/pages/RestaurantDetails.js
import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RestaurantDetails.css";

// Assets
import RestaurantProfile from "../assets/RestaurantProfile.png";
import dish1 from "../assets/dish1.png";
import dish2 from "../assets/chickenpiece.png";
import dish3 from "../assets/dish1.png";
import dish4 from "../assets/chickenpiece.png";
import logo from "../assets/logo.png";
import Nonveg from "../assets/Non-veg.png";

// Components
import BecomeAPartner from "../components/BecomeAPartner.jsx";
import FoodOffers from "../components/FoodOffers.jsx";
import QRCodeGenerator from "../assets/QR_Code_Sample.png";
import { color } from "framer-motion";

export default function RestaurantDetails() {
  const { id } = useParams();
  const [cardWidth, setCardWidth] = useState(300);

  const menuItems = [
    { name: "Ikoyi", price: "$20", desc: "Delicious Chinese Dish", img: dish1 },
    { name: "Chishuru", price: "$47", desc: "Delicious Chinese Dish", img: dish2 },
    { name: "Queen of Sheba", price: "$30", desc: "Delicious Chinese Dish", img: dish3 },
    { name: "Spice Garden", price: "$42", desc: "Delicious Chinese Dish", img: dish4 },
    { name: "Jollof Rice", price: "$18", desc: "Classic West African Staple", img: dish1 },
    { name: "Suya Skewers", price: "$25", desc: "Spicy Grilled Meat", img: dish2 },
    { name: "Egusi Soup", price: "$35", desc: "Rich & Nutty Nigerian Soup", img: dish3 },
    { name: "Moi Moi", price: "$15", desc: "Steamed Bean Pudding", img: dish4 },
    { name: "Pounded Yam", price: "$22", desc: "Traditional Swallow", img: dish1 },
    { name: "Akara", price: "$10", desc: "Fried Bean Cakes", img: dish2 },
  ];

  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  useEffect(() => {
    const updateCardWidth = () => {
      if (window.innerWidth >= 1200) {
        setCardWidth(300);
      } else if (window.innerWidth >= 992) {
        setCardWidth(280);
      } else if (window.innerWidth >= 768) {
        setCardWidth(260);
      } else {
        setCardWidth(240);
      }
    };
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const scrollLeft = (ref) => {
    ref.current.scrollBy({ left: -cardWidth - 24, behavior: "smooth" });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
  };

  return (
    <div className="restaurant-details-page d-flex flex-column min-vh-120">
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

          <nav className="d-flex flex-grow-1 justify-content-evenly mx-3">
            <a href="#" className="text-decoration-none nav-link-custom">Popular</a>
            <a href="#" className="text-decoration-none nav-link-custom">Menu</a>
            <a href="#" className="text-decoration-none nav-link-custom">Gallery</a>
            <a href="#" className="text-decoration-none nav-link-custom">Orders</a>
            <a href="#" className="text-decoration-none nav-link-custom">Cart</a>
          </nav>

          <button className="btn btn-sm">Sign in</button>
        </div>
      </header>

      {/* Restaurant Header */}
      <div className="restaurant-header">
        <div className="restaurant-image">
          <img src={RestaurantProfile} alt="Restaurant" />
        </div>
        <div className="card-info-box">
          <div className="d-flex justify-content-end mb-2 verified-badge-container">
            <span className="badge-outline">
              <i className="fas fa-check-circle"></i> verified
            </span>
          </div>
          <h3 className="fw-bold mb-1">Restaurant Name</h3>
          <p className="mb-1 text-muted">0245, near Delux tower, hyd</p>
          <div className="d-flex align-items-center mb-2 rating-container">
            <span className="fw-bold me-2">7.9</span>
            <i className="fas fa-star"></i>
          </div>
          <p className="text-muted small mb-0">
            Lorem ipsum dolor sit amet consectetur. Fermentum dapibus urna morbi
            egestas volutpat adipiscing posuere morbi odio.
            lorem ipsum dolor sit amet consectetur. Fermentum dapibus urna morbi
            egestas volutpat adipiscing posuere morbi odio.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="About-section-container">
        <div className="card shadow-sm p-4 mb-4 about-section">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h5 className="fw-bold about-title">About Restaurant {id}</h5>
              <p className="about-text">
                Lorem ipsum dolor sit amet consectetur. Fermentum dapibus urna morbi
                egestas volutpat adipiscing posuere morbi odio.lorem ipsum dolor sit amet
                lorem ipsum dolor sit amet consectetur. Fermentum dapibus urna morbi
                egestas volutpat adipiscing posuere morbi odio.lorem ipsum dolor sit amet
                consectetur. Fermentum dapibus urna morbi egestas volutpat adipiscing
                posuere morbi odio.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <div className="qr-placeholder">
                <img src={QRCodeGenerator} alt="QR Code" className="qr-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container mb-4">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="input-group mt-3 shadow-sm border border-dark" style={{ borderRadius: "12px", overflow: "hidden" }}>
              <span className="input-group-text bg-white border-0">
                <i className="fas fa-search text-secondary"></i>
              </span>
              <input type="text" className="form-control border-0" placeholder="Search menu items..." />
            </div>
          </div>
        </div>
      </div>

      {/* Food Offers */}
      <div className="full-width-banner">
        <FoodOffers mode="banner" />
      </div>

      {/* Top Popular Items */}
      <div className="section-carousel-container px-3 mb-5 position-relative">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-bold fs-3">Top Popular Items</h4>
        </div>

        <button className="carousel-nav-btn carousel-nav-left" onClick={() => scrollLeft(scrollRef1)}>
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="menu-carousel d-flex gap-3 overflow-x-auto pb-3" ref={scrollRef1}>
          {menuItems.map((item, index) => (
            <div key={index} className="menu-card card border-0 rounded-3 shadow-sm position-relative flex-shrink-0" style={{ width: `${cardWidth}px`, height: "360px" }}>
              <div className="position-relative w-100 h-100">
                <img src={item.img} alt={item.name} className="w-100 h-100 object-fit-cover" style={{ borderRadius: "12px" }} />
                <div className="position-absolute top-0 start-0 end-0 bottom-0"
                  style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))", borderRadius: "12px" }}>
                </div>

                <button className="position-absolute top-0 end-0 m-2 btn btn-sm btn-light rounded-circle" style={{ width: "36px", height: "36px", padding: "0" }}>
                  <i className="far fa-heart text-dark"></i>
                </button>

                <div className="position-absolute bottom-0 start-0 end-0 p-3 text-white">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h5 className="fw-bold mb-1">{item.name}</h5>
                      <p className="small mb-2">{item.desc}</p>
                      {/* ✅ Added lorem content */}
                      <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel augue ac nisi viverra suscipit.</p>
                    </div>
                    <div className="text-end  Icons" >
                      <img src={Nonveg} alt="Non-Veg" style={{ width: "16px", height: "16px" }} className="mb-1  Non-veg" />
                      <span className="fw-bold fs-5 d-block">{item.price}</span>
                      <button className="btn btn-sm btn-light rounded-circle mt-1" style={{ width: "32px", height: "32px", padding: "0" }}>
                        <i className="fas fa-shopping-cart text-dark"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-nav-btn carousel-nav-right" onClick={() => scrollRight(scrollRef1)}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* Our Menu Items */}
      <div className="section-carousel-container px-3 mb-5 position-relative">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-bold fs-3">Our Menu Items</h4>
        </div>

        <button className="carousel-nav-btn carousel-nav-left" onClick={() => scrollLeft(scrollRef2)}>
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="menu-carousel d-flex gap-3 overflow-x-auto pb-3" ref={scrollRef2}>
          {menuItems.map((item, index) => (
            <div key={index} className="menu-card card border-0 rounded-3 shadow-sm position-relative flex-shrink-0" style={{ width: `${cardWidth}px`, height: "360px" }}>
              <div className="position-relative w-100 h-100">
                <img src={item.img} alt={item.name} className="w-100 h-100 object-fit-cover" style={{ borderRadius: "12px" }} />
                <div className="position-absolute top-0 start-0 end-0 bottom-0"
                  style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))", borderRadius: "12px" }}>
                </div>

                <div className="position-absolute bottom-0 start-0 end-0 p-3 text-white">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h5 className="fw-bold mb-1">{item.name}</h5>
                      <p className="small mb-2">{item.desc}</p>
                      {/* ✅ Added lorem content */}
                      <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt velit sit amet nunc ullamcorper.</p>
                    </div>
                    <div className="text-end Icons">
                      <img src={Nonveg} alt="Non-Veg" style={{ width: "16px", height: "16px",}} className="mb-1  Non-veg" />
                      <span className="fw-bold fs-5 d-block">{item.price}</span>
                      <button className="btn btn-sm btn-light rounded-circle mt-1" style={{ width: "32px", height: "32px", padding: "0" }}>
                        <i className="fas fa-shopping-cart text-dark"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-nav-btn carousel-nav-right" onClick={() => scrollRight(scrollRef2)}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <section className="food-grid-section" style={{ backgroundColor:"white"}}>
        <h2 className="fw-bold Foodgrid" style={{color:"orange",textAlign:"center"}}>Our Gallery</h2>
        <FoodOffers mode="grid" />
    </section>

      {/* Footer */}
      <footer className="footer-ribbon bg-orange text-white py-3 mt-auto">
        <div className="container-fluid px-4">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
              <p className="mb-0">&copy; 2025 Afri Bites. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="social-icons d-flex justify-content-center justify-content-md-end gap-3">
                <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-white"><i className="fab fa-x-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
