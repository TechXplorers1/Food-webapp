import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ ADDED FOR NAVIGATION
import "bootstrap/dist/css/bootstrap.min.css";
import "./TopRestaurants.css";

// Import your images
import Chicken from "../assets/chickenpiece.png";
import GreenChilliChicken from "../assets/greenchillichicken.png";

export default function TopRestaurants() {
  const navigate = useNavigate(); // ✅ Initialize navigation
  const [favorites, setFavorites] = useState({});
  const [visibleCards, setVisibleCards] = useState(4); // Default for large screens
  const scrollRef = useRef(null);

  // Restaurant data
  const restaurants = [
    { id: 1, name: "Ikoyi", cuisine: "Chinese Fusion", price: "$59", image: Chicken },
    { id: 2, name: "Chishuru", cuisine: "West African", price: "$45", image: GreenChilliChicken },
    { id: 3, name: "Queen of Sheba", cuisine: "Ethiopian", price: "$38", image: GreenChilliChicken },
    { id: 4, name: "Hakkasan", cuisine: "Modern Chinese", price: "$68", image: GreenChilliChicken },
    { id: 5, name: "Nobu", cuisine: "Japanese", price: "$75", image: GreenChilliChicken },
    { id: 6, name: "Zuma", cuisine: "Japanese Izakaya", price: "$62", image: GreenChilliChicken },
    { id: 7, name: "Dishoom", cuisine: "Indian", price: "$32", image: GreenChilliChicken },
    { id: 8, name: "Gymkhana", cuisine: "Indian Fine Dining", price: "$55", image: Chicken },
    { id: 9, name: "Bao", cuisine: "Taiwanese Buns", price: "$28", image: GreenChilliChicken },
    { id: 10, name: "Kiln", cuisine: "Thai Claypot", price: "$42", image: Chicken },
  ];

  // Set number of visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setVisibleCards(4); // XL screens and above - 4 cards
      } else if (window.innerWidth >= 992) {
        setVisibleCards(3); // LG screens
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2); // MD screens
      } else {
        setVisibleCards(1); // SM/XS screens
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle favorite status
  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Handle scroll navigation
  const handleScroll = (direction) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    const cardWidth = scrollContainer.querySelector('.card-item')?.offsetWidth || 280;
    const gap = 16; // 1rem gap
    const scrollAmount = (cardWidth + gap) * visibleCards;

    if (direction === "left") {
      scrollContainer.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    } else {
      scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // ✅ Handle View All Click — Navigate to Top Restaurants Page
  const handleViewAll = () => {
    navigate("/top-restaurants");
  };

  return (
    <section className="top-restaurants-section py-5">
      <div className="container-fluid px-0">
        {/* Section Header — Title shifted right, View All in dark orange */}
        <div className="row align-items-center mb-4 mx-0">
          <div className="col ps-5">
            <h2 className="fw-bold">Top Restaurants</h2>
          </div>
          <div className="col-auto">
            <button 
              onClick={handleViewAll}
              className="view-all-link fw-medium btn btn-link p-0 text-decoration-none"
              style={{ color: "#e56f00" }}
              aria-label="View all restaurants"
            >
              View All
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="card-scroll-container position-relative overflow-hidden mx-auto" style={{ width: '90%' }}>
          {/* Left Arrow Button */}
          <button
            className="scroll-btn left-btn position-absolute top-50 start-0 translate-middle-y bg-white border-0 shadow-sm"
            onClick={() => handleScroll("left")}
            aria-label="Scroll Left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            className="scroll-btn right-btn position-absolute top-50 end-0 translate-middle-y bg-white border-0 shadow-sm"
            onClick={() => handleScroll("right")}
            aria-label="Scroll Right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Cards */}
          <div className="card-scroll-content d-flex gap-3 px-3" ref={scrollRef}>
            {restaurants.map((restaurant) => (
              <div 
                key={restaurant.id} 
                className="card-item flex-shrink-0"
                style={{ 
                  '--visible-cards': visibleCards,
                  minWidth: `calc((100% - (1rem * ${visibleCards - 1})) / ${visibleCards} - 1px)`,
                  maxWidth: `calc((100% - (1rem * ${visibleCards - 1})) / ${visibleCards} - 1px)`
                }}
              >
                <div className="card-img-container position-relative">
                  {/* Image */}
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="card-image"
                  />

                  {/* Overlay */}
                  <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>

                  {/* Heart Icon — OUTLINED BLACK, FILLS RED WHEN FAVORITED */}
                  <div
                    className="heart-icon position-absolute top-0 end-0 m-2"
                    onClick={() => toggleFavorite(restaurant.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill={favorites[restaurant.id] ? "#dc3545" : "none"}
                      stroke={favorites[restaurant.id] ? "none" : "black"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>

                  {/* Title, Cuisine, Price, and Placeholder Description */}
                  <div className="image-content position-absolute bottom-0 start-0 p-3 text-white w-100">
                    <div className="d-flex justify-content-between align-items-start mb-1">
                      <div>
                        <h5 className="card-title fw-bold mb-1">{restaurant.name}</h5>
                        <p className="card-subtitle small mb-0">{restaurant.cuisine}</p>
                      </div>
                      <div className="price-text fw-bold">
                        {restaurant.price}
                      </div>
                    </div>
                    <p className="card-text small mt-1 mb-0 opacity-90">
                      Discover the finest flavors curated just for you.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}