import React, { useState, useRef } from 'react';
import './TopChefs.css';

// Import your images
import Simon from '../assets/Simon.png';
import Nobi from '../assets/Nobi.png';
import Suzumi from '../assets/Suzumi.png';

export default function TopChefs() {
  const [favorites, setFavorites] = useState({});
  const scrollRef = useRef(null);

  // ➤ Only 5 chefs
  const chefs = [
    { id: 1, name: "SIMON", cuisine: "Chinese Fusion", desc: "Award-winning chef with 15+ years experience in Sichuan cuisine.", image: Simon },
    { id: 2, name: "NOBI", cuisine: "West African", desc: "Specializes in bold, spicy traditional recipes from Nigeria and Ghana.", image: Nobi },
    { id: 3, name: "SUZUMI", cuisine: "Japanese", desc: "Master of sushi and delicate flavor balance with seasonal ingredients.", image: Suzumi },
    { id: 4, name: "CHEF LARA", cuisine: "Mediterranean", desc: "Fresh, vibrant dishes inspired by coastal flavors of Greece and Turkey.", image: Simon },
    { id: 5, name: "CHEF MARCO", cuisine: "Italian", desc: "Handmade pasta and wood-fired pizzas using family recipes from Naples.", image: Nobi },
  ];

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleScroll = (direction) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const cardWidth = scrollContainer.querySelector('.card-item')?.offsetWidth || 280;
    const gap = 16; // 1rem gap
    const scrollAmount = direction === "left" ? -(cardWidth + gap) : (cardWidth + gap);

    scrollContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="top-chefs-section py-5">
      {/* ➤ 90% WIDTH CENTERED WRAPPER */}
      <div className="section-centered-wrapper">
        {/* Header */}
        <div className="row align-items-center mb-4 mx-0">
          <div className="col ps-5">
            <h2 className="fw-bold">Top Chefs</h2>
          </div>
          <div className="col-auto">
            <a href="#" className="view-all-link fw-medium">View All</a>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="card-scroll-container position-relative overflow-hidden">
          {/* Left Arrow */}
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

          {/* Right Arrow */}
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
            {chefs.map((chef) => (
              <div key={chef.id} className="card-item flex-shrink-0">
                <div className="card-img-container position-relative">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="card-image w-100 h-100"
                    style={{ objectFit: 'cover', height: '360px' }}
                  />

                  {/* Overlay */}
                  <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>

                  {/* Heart Icon */}
                  <div
                    className="heart-icon position-absolute top-0 end-0 m-2"
                    onClick={() => toggleFavorite(chef.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill={favorites[chef.id] ? "#dc3545" : "none"}
                      stroke={favorites[chef.id] ? "none" : "black"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="image-content position-absolute bottom-0 start-0 p-3 text-white w-100">
                    <div className="d-flex justify-content-between align-items-start mb-1">
                      <div>
                        <h5 className="card-title fw-bold mb-1">{chef.name}</h5>
                        <p className="card-subtitle small mb-0">{chef.cuisine}</p>
                      </div>
                    </div>
                    <p className="card-text small mt-1 mb-0 opacity-90">
                      {chef.desc}
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