import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopChefs.css';

// Import your images
import Simon from '../assets/Simon.png';
import Nobi from '../assets/Nobi.png';
import Suzumi from '../assets/Suzumi.png';

export default function TopChefs() {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const chefs = [
    { id: 1, name: "SIMON", cuisine: "Chinese Chinese", desc: "Lorem ipsum dolor sit amet consectetur. Est fermentum dictumst augue nunc purus nec mattis ornare.", image: Simon },
    { id: 2, name: "NOBI", cuisine: "Chinese Chinese", desc: "Lorem ipsum dolor sit amet consectetur. Est fermentum dictumst augue nunc purus nec mattis ornare.", image: Nobi },
    { id: 3, name: "SUZUMI", cuisine: "Chinese Chinese", desc: "Lorem ipsum dolor sit amet consectetur. Est fermentum dictumst augue nunc purus nec mattis ornare.", image: Suzumi }
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Main Content */}
      <div className="flex-grow-1">
        <section className="top-chefs-section py-5">
          <div className="container-fluid px-0">
            {/* Header */}
            <div className="row align-items-center mb-4 mx-0">
              <div className="col ps-5">
                <h2 className="fw-bold">Top Chefs</h2>
              </div>
              <div className="col-auto">
                <a href="#" className="view-all-link fw-medium">View All</a>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="container-fluid px-3">
              <div className="row g-4">
                {chefs.map((chef) => (
                  <div key={chef.id} className="col-md-4 col-sm-6">
                    <div className="card-item position-relative rounded-3 overflow-hidden shadow-sm" style={{ height: '360px' }}>
                      {/* Image */}
                      <img
                        src={chef.image}
                        alt={chef.name}
                        className="card-image w-100 h-100"
                        style={{ objectFit: 'cover' }}
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
      </div>

      {/* Footer Ribbon — Fixed at Bottom, No Scroll After */}
      <footer className="bg-orange text-white py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
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