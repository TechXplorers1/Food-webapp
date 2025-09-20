// FoodOffersGridSection.jsx

import React from 'react';
import './FoodOffersGridSection.css'; // CSS file for grid section

const FoodOffersGridSection = () => {
  const offers = [
    {
      id: 1,
      image: 'https://via.placeholder.com/400x300?text=Offer+1',
      label: '20% OFF',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/400x300?text=Offer+2',
      label: 'Buy 1 Get 1',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/400x300?text=Offer+3',
      label: 'Free Delivery',
    },
    // Add more as needed
  ];

  return (
    <section className="food-offers-section">
      <div className="row g-3">
        {offers.map((offer) => (
          <div className="col-md-4" key={offer.id}>
            <div className="image-container">
              <img src={offer.image} alt={`Food Offer ${offer.id}`} />
              <div className="image-label">{offer.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodOffersGridSection;