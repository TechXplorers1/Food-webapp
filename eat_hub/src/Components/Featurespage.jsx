import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Featurespage.css";

// Import your image assets
import homeFoodImg from "../assets/hotbox.png"; // Replace with actual path
import restaurantImg from "../assets/spoons.png"; // Replace with actual path
import privateChefImg from "../assets/chef.png"; // Replace with actual path

export default function FeaturesSection() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelect = (cardId) => {
    setSelectedCard(cardId);
  };

  return (
    <section className="features-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Features</h2>
        <div className="row g-4 justify-content-center">
          {/* Card 1: Home Food */}
          <div className="col-md-4">
            <div
              className={`card h-100 shadow-sm border rounded-3 cursor-pointer ${selectedCard === 'home' ? 'border-dark-orange' : ''}`}
              onClick={() => handleSelect('home')}
            >
              <div className="card-body text-center p-4">
                <div className="icon-container mb-3">
                  <div
                    className="circle-icon d-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: "60px", height: "60px", backgroundColor: "#ff7b00" }}
                  >
                    <img
                      src={homeFoodImg}
                      alt="Home Food"
                      className="img-fluid"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </div>
                </div>
                <h5 className="card-title fw-bold">Home Food</h5>
                <p className="card-text text-muted">
                  "Freshly prepared meals from trusted home chefs near you. Comfort food, anytime."
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Restaurant */}
          <div className="col-md-4">
            <div
              className={`card h-100 shadow-sm border rounded-3 cursor-pointer ${selectedCard === 'restaurant' ? 'border-dark-orange' : ''}`}
              onClick={() => handleSelect('restaurant')}
            >
              <div className="card-body text-center p-4">
                <div className="icon-container mb-3">
                  <div
                    className="circle-icon d-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: "60px", height: "60px", backgroundColor: "#ff7b00" }}
                  >
                    <img
                      src={restaurantImg}
                      alt="Restaurant"
                      className="img-fluid"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </div>
                </div>
                <h5 className="card-title fw-bold">Restaurant</h5>
                <p className="card-text text-muted">
                  "Explore top-rated restaurants and enjoy your favorite dishes delivered to you."
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Private Chef */}
          <div className="col-md-4">
            <div
              className={`card h-100 shadow-sm border rounded-3 cursor-pointer ${selectedCard === 'chef' ? 'border-dark-orange' : ''}`}
              onClick={() => handleSelect('chef')}
            >
              <div className="card-body text-center p-4">
                <div className="icon-container mb-3">
                  <div
                    className="circle-icon d-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: "60px", height: "60px", backgroundColor: "#ff7b00" }}
                  >
                    <img
                      src={privateChefImg}
                      alt="Private Chef"
                      className="img-fluid"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </div>
                </div>
                <h5 className="card-title fw-bold">Private Chef</h5>
                <p className="card-text text-muted">
                  "Book a chef for private dinners, parties, or cooking lessons at your home."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}