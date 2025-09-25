import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TopHomeFood.css";
import { Link } from "react-router-dom";

// Import your images
import ikoyiImg from "../assets/chickenpiece.png";
import chishuruImg from "../assets/greenchillichicken.png";
import queenOfShebaImg from "../assets/greenchillichicken.png";

export default function TopHomeFood() {
  const [favorites, setFavorites] = useState({});
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  // Generate 10 items
  const items = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: [
      "Ikoyi",
      "Chishuru",
      "Queen of Sheba",
      "Spice Garden",
      "Taste of Sichuan",
      "Biryani House",
      "Sushi Palace",
      "Pasta Heaven",
      "Taco Fiesta",
      "Grill Master",
    ][i % 10],
    subtitle: "Delicious Chinese Dish",
    price: "$" + (Math.floor(Math.random() * 30) + 20),
    desc: "Lorem ipsum dolor sit amet consectetur. Est fermentum dictumst augue nunc purus nec mattis ornare.",
    rating: (Math.random() * 1 + 4).toFixed(1), // Random rating between 4.0 and 5.0
    reviews: Math.floor(Math.random() * 100) + 50, // Random reviews between 50-150
  }));

  const getImage = (name) => {
    switch (name) {
      case "Ikoyi":
        return ikoyiImg;
      case "Chishuru":
        return chishuruImg;
      default:
        return queenOfShebaImg;
    }
  };

  // Toggle favorite status
  const toggleFavorite = (id, e) => {
    e.stopPropagation(); // Prevent card click navigation when clicking heart
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Handle scroll navigation
  const handleScroll = (direction) => {
    const scrollContainer = scrollRef.current;
    const scrollAmount = 300;

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

  const goToDetails = (item) => {
  navigate(`/homefooddetails/${item.id}`, {
    state: { ...item, image: getImage(item.name) },
  });
};


  return (
    <section className="top-home-food-section py-5">
      <div className="container-fluid px-0">
        {/* Section Header */}
        <div className="row align-items-center mb-4 mx-0">
          <div className="col ps-5">
            <h2 className="fw-bold">Top Home Food</h2>
          </div>
          <div className="col-auto">
            <a href="#" className="view-all-link fw-medium">
              View All
            </a>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="card-scroll-container position-relative overflow-hidden">
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
            {items.map((item) => (
              <div
                key={item.id}
                className="card-item flex-shrink-0"
                onClick={() => goToDetails(item)} // 👈 Card click navigates
                style={{ cursor: "pointer" }}
              >
                <div className="card-img-container position-relative">
                  {/* Image */}
                  <img
                    src={getImage(item.name)}
                    alt={item.name}
                    className="card-image"
                  />

                  {/* Overlay */}
                  <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>

                  {/* Heart Icon */}
                  <div
                    className="heart-icon position-absolute top-0 end-0 m-2"
                    onClick={(e) => toggleFavorite(item.id, e)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill={favorites[item.id] ? "#dc3545" : "none"}
                      stroke={favorites[item.id] ? "none" : "black"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>

                  {/* Title, Subtitle, Price, Description */}
                  <div className="image-content position-absolute bottom-0 start-0 p-3 text-white w-100">
                    <div className="d-flex justify-content-between align-items-start mb-1">
                      <div>
                        <h5 className="card-title fw-bold mb-1">{item.name}</h5>
                        <p className="card-subtitle small mb-0">{item.subtitle}</p>
                      </div>
                      <div className="price-text fw-bold">{item.price}</div>
                    </div>
                    <p className="card-text small mt-1 mb-0 opacity-90">
                      {item.desc}
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
