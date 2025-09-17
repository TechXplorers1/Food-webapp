import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopRestaurants.css';
import Chicken from '../assets/chickenpiece.png';
import GreenChilliChicken from '../assets/greenchillichicken.png';

const TopRestaurants = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const restaurants = [
    { id: 1, name: "Ikoyi", cuisine: "Chinese Fusion", price: "$59", image: {Chicken} },
    { id: 2, name: "Chishuru", cuisine: "West African", price: "$45", image: {GreenChilliChicken} },
    { id: 3, name: "Queen of Sheba", cuisine: "Ethiopian", price: "$38", image: {GreenChilliChicken} },
    { id: 4, name: "Hakkasan", cuisine: "Modern Chinese", price: "$68", image: {GreenChilliChicken} },
    { id: 5, name: "Nobu", cuisine: "Japanese", price: "$75", image: {GreenChilliChicken} },
    { id: 6, name: "Zuma", cuisine: "Japanese Izakaya", price: "$62", image: {GreenChilliChicken} },
    { id: 7, name: "Dishoom", cuisine: "Indian", price: "$32", image: {GreenChilliChicken} },
    { id: 8, name: "Gymkhana", cuisine: "Indian Fine Dining", price: "$55", image: {Chicken} },
    { id: 9, name: "Bao", cuisine: "Taiwanese Buns", price: "$28", image: {GreenChilliChicken} },
    { id: 10, name: "Kiln", cuisine: "Thai Claypot", price: "$42", image: {Chicken} },
  ];

  return (
    <div className="container-fluid mt-4 px-4">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4">Top Restaurants</h2>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div></div>
            <a href="#" className="text-primary text-decoration-none">View All</a>
          </div>

          {/* Scrollable Carousel Container */}
          <div className="position-relative">
            {/* Left Arrow */}
            <button 
              className="carousel-control-prev position-absolute top-50 start-0 translate-middle-y bg-white border rounded-circle shadow z-3"
              onClick={scrollLeft}
              style={{ width: '40px', height: '40px', marginLeft: '-15px' }}
            >
              <span className="carousel-control-prev-icon" style={{ backgroundImage: 'none' }}></span>
            </button>

            {/* Scrollable Cards */}
            <div 
              ref={scrollRef}
              className="d-flex overflow-x-auto scroll-smooth hide-scrollbar"
              style={{ gap: '16px', padding: '8px 0', scrollBehavior: 'smooth' }}
            >
              {restaurants.map((restaurant) => (
                <div 
                  key={restaurant.id} 
                  className="card border-0 rounded-3 shadow-sm flex-shrink-0"
                  style={{ width: '270px', height: '380px' }}
                >
                  {/* Full Image Background */}
                  <div className="position-relative w-100 h-100">
                    <img 
                      src={Chicken} 
                      className="card-img w-100 h-100 object-fit-cover rounded-3" 
                      alt={restaurant.name}
                      style={{ borderRadius: '8px' }}
                    />
                    
                    {/* Overlay Content at Bottom */}
                    <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-gradient-dark rounded-bottom-3">
                      <h5 className="text-white mb-1">{restaurant.name}</h5>
                      <p className="text-white-75 small mb-2">{restaurant.cuisine}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-warning fw-bold">{restaurant.price}</span>
                        <span className="badge bg-danger">HOT</span>
                      </div>
                    </div>

                    {/* Heart Button */}
                    <button 
                      className="btn btn-outline-light position-absolute top-0 end-0 m-2 rounded-circle p-2"
                      style={{ width: '32px', height: '32px' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 2.748c.012-.01.027-.019.042-.029l.008-.008a.5.5 0 0 1 .707.707l-.008.008a.5.5 0 0 1-.042.029c-.01.01-.019.027-.029.042l-.008.008a.5.5 0 0 1-.707-.707l.008-.008a.5.5 0 0 1 .029-.042zM8 5.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V6A.5.5 0 0 1 8 5.5zm0 6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 11.5z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button 
              className="carousel-control-next position-absolute top-50 end-0 translate-middle-y bg-white border rounded-circle shadow z-3"
              onClick={scrollRight}
              style={{ width: '40px', height: '40px', marginRight: '-15px' }}
            >
              <span className="carousel-control-next-icon" style={{ backgroundImage: 'none' }}></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRestaurants;