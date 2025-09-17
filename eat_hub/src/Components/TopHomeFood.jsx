import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TopHomeFood.css";

// Import your images
import ikoyiImg from "../assets/chickenpiece.png";
import chishuruImg from "../assets/greenchillichicken.png";
import queenOfShebaImg from "../assets/greenchillichicken.png";

export default function TopHomeFood() {
  const [favorites, setFavorites] = useState({}); // Track favorited items

  // Generate 10 items
  const items = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: ["Ikoyi", "Chishuru", "Queen of Sheba", "Spice Garden", "Taste of Sichuan", "Biryani House", "Sushi Palace", "Pasta Heaven", "Taco Fiesta", "Grill Master"][i % 10],
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
  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="top-home-food-section py-5">
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col">
            <h2 className="fw-bold">Top Home Food</h2>
          </div>
          <div className="col-auto">
            <a href="#" className="text-warning fw-medium">View All</a>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="row g-4">
          {items.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card-item position-relative h-100">
                {/* Card Image with Overlay Content */}
                <div className="card-img-container position-relative">
                  <img src={getImage(item.name)} alt={item.name} className="img-fluid" />
                  
                  {/* Dark Overlay */}
                  <div className="overlay"></div>
                  
                  {/* Text Content on Image */}
                  <div className="image-content position-absolute bottom-0 start-0 p-3 text-white w-100">
                    <h5 className="card-title fw-bold mb-1">{item.name}</h5>
                    <p className="card-subtitle small mb-2">{item.subtitle}</p>
                    <span className="price-badge bg-danger text-white px-2 py-1 rounded-pill">
                      {item.price}
                    </span>
                  </div>
                  
                  {/* Heart Icon */}
                  <div 
                    className="heart-icon position-absolute top-0 end-0 m-2"
                    onClick={() => toggleFavorite(item.id)}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24"
                      fill={favorites[item.id] ? "#dc3545" : "white"}
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Card Body (Below Image) */}
                <div className="card-body p-3">
                  <p className="card-text text-muted small">{item.desc}</p>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <span className="rating text-muted small">★ {item.rating} ({item.reviews})</span>
                    <span className="badge bg-danger text-white">New</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}