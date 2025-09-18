import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BecomeAPartner.css';

// Icons as SVGs (inline)
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const RestaurantIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

const ChefIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L15.09 8.26L19 9.27L16 14.14L17.18 19H9.82L11 14.14L8 9.27L11.91 8.26L12 2Z"></path>
  </svg>
);

export default function BecomeAPartner() {
  return (
    <section className="become-partner-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Become a Partner</h2>
          <p className="lead text-muted fst-italic"> {/* 👈 Added fst-italic */}
            Grow with Jollof by joining as a Restaurant, Home Food Cook, or Private Chef.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Home Food Partner */}
          <div className="col-md-4 col-sm-6 d-flex">
            <div className="partner-card text-center p-4 rounded-3 shadow-sm border flex-fill d-flex flex-column">
              <div className="icon-container mb-3">
                <div className="bg-light-orange rounded-circle p-3 d-inline-flex align-items-center justify-content-center">
                  <HomeIcon />
                </div>
              </div>
              <h5 className="fw-bold mb-2">Home Food Partner</h5>
              <p className="text-muted small mb-3 flex-grow-1">
                For home cooks and tiffin services
              </p>
              <button className="btn btn-orange w-100 fw-medium mt-auto">
                Register Now
              </button>
            </div>
          </div>

          {/* Restaurant Partner */}
          <div className="col-md-4 col-sm-6 d-flex">
            <div className="partner-card text-center p-4 rounded-3 shadow-sm border flex-fill d-flex flex-column">
              <div className="icon-container mb-3">
                <div className="bg-light-orange rounded-circle p-3 d-inline-flex align-items-center justify-content-center">
                  <RestaurantIcon />
                </div>
              </div>
              <h5 className="fw-bold mb-2">Restaurant Partner</h5>
              <p className="text-muted small mb-3 flex-grow-1">
                For restaurants, cafes, and cloud kitchens.
              </p>
              <button className="btn btn-orange w-100 fw-medium mt-auto">
                Register Now
              </button>
            </div>
          </div>

          {/* Chef Partner */}
          <div className="col-md-4 col-sm-6 d-flex">
            <div className="partner-card text-center p-4 rounded-3 shadow-sm border flex-fill d-flex flex-column">
              <div className="icon-container mb-3">
                <div className="bg-light-orange rounded-circle p-3 d-inline-flex align-items-center justify-content-center">
                  <ChefIcon />
                </div>
              </div>
              <h5 className="fw-bold mb-2">Chef Partner</h5>
              <p className="text-muted small mb-3 flex-grow-1">
                Grow your career, connect with clients, and showcase your passion for food.
              </p>
              <button className="btn btn-orange w-100 fw-medium mt-auto">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}