// src/pages/HomeFoodDetails.js
import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./HomeFoodDetails.css";

// Assets (replace with your home food images)
import HomeFoodProfile from "../assets/RestaurantProfile.png";
import dish1 from "../assets/dish1.png";
import dish2 from "../assets/chickenpiece.png";
import dish3 from "../assets/dish1.png";
import dish4 from "../assets/chickenpiece.png";
import logo from "../assets/logo.png";
import QRCodeGenerator from "../assets/QR_Code_Sample.png";
import Nonveg from "../assets/Non-veg.png";
import Cart from "../assets/Cart.png";

// Components
import FoodOffers from "../components/FoodOffers.jsx";

export default function HomeFoodDetails() {
  const { id } = useParams();
  const [cardWidth, setCardWidth] = useState(300);

  const menuItems = [
    { name: "Special Curry", price: "$20", desc: "Delicious homemade curry", img: dish1 },
    { name: "Veg Thali", price: "$47", desc: "Traditional Indian platter", img: dish2 },
    { name: "Paneer Butter Masala", price: "$30", desc: "Rich and creamy paneer curry", img: dish3 },
    { name: "Chicken Fry", price: "$42", desc: "Crispy homemade chicken fry", img: dish4 },
  ];

  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  // Responsive card width
  useEffect(() => {
    const updateCardWidth = () => {
      if (window.innerWidth >= 1200) setCardWidth(300);
      else if (window.innerWidth >= 992) setCardWidth(280);
      else if (window.innerWidth >= 768) setCardWidth(260);
      else setCardWidth(240);
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
    <div className="homefood-details-page d-flex flex-column min-vh-100">
      {/* Navbar */}
      <header className="navbar navbar-expand-md navbar-light site-header">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <a href="/" className="navbar-brand d-flex align-items-center">
            <img
              src={logo}
              alt="Logo"
              className="img-fluid"
              style={{ width: "70px", height: "70px" }}
            />
          </a>
      
          {/* Navigation Links - Centered with even spacing */}
          <nav className="d-flex flex-grow-1 justify-content-evenly mx-3">
            <a href="#" className="text-decoration-none nav-link-custom">
              Popular
            </a>
            <a href="#" className="text-decoration-none nav-link-custom">
              Menu
            </a>
            <a href="#" className="text-decoration-none nav-link-custom">
              Gallery
            </a>
            <a href="#" className="text-decoration-none nav-link-custom">
              Orders
            </a>
            <a href="#" className="text-decoration-none nav-link-custom">
              Cart
            </a>
          </nav>
      
          {/* Sign In Button - Right Aligned */}
          <button className="btn btn-sm">Sign in</button>
        </div>
      </header>

      {/* ===== Home Food Header ===== */}
      <div className="homefood-header">
        <div className="homefood-image">
          <img src={HomeFoodProfile} alt="Home Food" />
        </div>
        <div className="card-info-box">
          <div className="d-flex justify-content-end mb-2 verified-badge-container">
            <span className="badge-outline">
              <i className="fas fa-check-circle"></i> verified
            </span>
          </div>
          <h3 className="fw-bold mb-1">Home Cook Name</h3>
          <p className="mb-1 text-muted">Address, City</p>
          <div className="d-flex align-items-center mb-2 rating-container">
            <span className="fw-bold me-2">9.2</span>
            <i className="fas fa-star"></i>
          </div>
          <p className="text-muted small mb-0">
            Homemade food description text goes here. Share story, taste, and speciality.lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
        </div>
      </div>

      {/* ===== About Section ===== */}
      <div className="About-section-container">
        <div className="card shadow-sm p-4 mb-4 about-section">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h5 className="fw-bold about-title">About Home Cook {id}</h5>
              <p className="about-text">
                Detailed description about the cook, specialties, ingredients, tradition,
                and the type of food prepared at home.lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
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

      {/* ===== Food Offers Banner ===== */}
      <div className="full-width-banner">
        <FoodOffers mode="banner" />
      </div>

      {/* ===== Popular Dishes Carousel ===== */}
      <div className="section-carousel-container px-3 mb-5 position-relative">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-bold fs-3">Top Popular Items</h4>
        </div>

        <button className="carousel-nav-btn carousel-nav-left" onClick={() => scrollLeft(scrollRef1)}>
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="menu-carousel d-flex gap-3 overflow-x-auto pb-3" ref={scrollRef1}>
          {menuItems.map((item, index) => (
            <div key={index} className="menu-card card border-0 rounded-3 shadow-sm position-relative flex-shrink-0"
              style={{ width: `${cardWidth}px`, height: "360px" }}>
              <div className="position-relative w-100 h-100">
                <img src={item.img} alt={item.name} className="w-100 h-100 object-fit-cover" style={{ borderRadius: "12px" }} />
                <div className="position-absolute top-0 start-0 end-0 bottom-0"
                  style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))", borderRadius: "12px" }}></div>
                <div className="position-absolute bottom-0 start-0 end-0 p-3 text-white">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h5 className="fw-bold mb-1">{item.name}</h5>
                      <p className="small mb-2">{item.desc}</p>
                      <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel augue ac nisi viverra suscipit.</p>
                    </div>
                    <div className="text-end">
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

      {/* ===== Our Menu Items (Horizontal Carousel) ===== */}
      <div className="section-carousel-container px-3 mb-5 position-relative">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-bold fs-3">Our Menu Items</h4>
        </div>

        <button
          className="carousel-nav-btn carousel-nav-left"
          onClick={() => scrollLeft(scrollRef2)}
          aria-label="Scroll Left"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <div
          className="menu-carousel d-flex gap-3 overflow-x-auto pb-3"
          ref={scrollRef2}
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="menu-card card border-0 rounded-3 shadow-sm position-relative flex-shrink-0"
              style={{ width: `${cardWidth}px`, height: "360px" }}
            >
              <div className="position-relative w-100 h-100">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-100 h-100 object-fit-cover"
                  style={{ borderRadius: "12px" }}
                />
                <div
                  className="position-absolute top-0 start-0 end-0 bottom-0"
                  style={{
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)",
                    borderRadius: "12px",
                  }}
                ></div>

                <button
                  className="position-absolute top-0 end-0 m-2 btn btn-sm btn-light rounded-circle"
                  style={{ width: "36px", height: "36px", padding: "0" }}
                  aria-label="Add to favorites"
                >
                  <i className="far fa-heart text-dark"></i>
                </button>

                <div className="position-absolute bottom-0 start-0 end-0 p-3 text-white">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h5 className="fw-bold mb-1">{item.name}</h5>
                      <p className="small mb-2">{item.desc}</p>
                      <p className="small mb-0">
                        Lorem ipsum dolor sit amet consectetur. Est fermentum dictumst augue nunc purus nec mattis ornare.
                      </p>
                    </div>
                    <div className="text-end">
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

        <button
          className="carousel-nav-btn carousel-nav-right"
          onClick={() => scrollRight(scrollRef2)}
          aria-label="Scroll Right"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <section className="food-grid-section" style={{ backgroundColor:"white"}}>
              <h2 className="fw-bold Foodgrid" style={{color:"#ff7b00",textAlign:"center"}}>Our Gallery</h2>
              <FoodOffers mode="grid" />
          </section>

      {/* ===== Footer ===== */}
      <footer className="footer-ribbon bg-orange text-white py-3 mt-auto">
        <div className="container-fluid px-4">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
              <p className="mb-0">&copy; 2025 Afri Bites. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="social-icons d-flex justify-content-center justify-content-md-end gap-3">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-x-twitter"style={{textDecoration:"none",}}></i>X</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
