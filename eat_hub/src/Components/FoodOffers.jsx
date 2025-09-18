import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FoodOffers.css';
import Restaurant from "../assets/Queenofshaba.png";
import Dish1 from "../assets/dish3.png";
import Dish2 from "../assets/greenchillichicken.png";

export default function FoodOffers() {
  return (
    <div className="food-offers-section py-4">
      {/* Star Item Header */}
      <h5 className="fw-bold mb-3">star item</h5>

      {/* Grid Row: Three Columns */}
      <div className="row g-2 align-items-start">
        {/* Left Column: Queen of Sheba */}
        <div className="col-md-4 col-12">
          <img
            src={Restaurant}
            alt="Queen of Sheba"
            className="img-fluid rounded-3 w-100"
            style={{ height: '400px', objectFit: 'cover' }}
          />
        </div>

        {/* Center Column: 4 Small Images */}
        <div className="col-md-4 col-12 d-flex flex-column gap-2">
          <img
            src={Dish1}
            alt="Dish 1"
            className="img-fluid rounded-3 w-100"
            style={{ height: '150px', objectFit: 'cover' }}
          />
          <img
            src={Dish2}
            alt="Efo Riro"
            className="img-fluid rounded-3 w-100"
            style={{ height: '150px', objectFit: 'cover' }}
          />
          <div className="d-flex gap-2">
            <img
              src="https://via.placeholder.com/100x100"
              alt="Waayke"
              className="img-fluid rounded-3"
              style={{ height: '100px', objectFit: 'cover' }}
            />
            <img
              src="https://via.placeholder.com/100x100"
              alt="Bean Stew"
              className="img-fluid rounded-3"
              style={{ height: '100px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Right Column: Koshari & Bunny Chow */}
        <div className="col-md-4 col-12 d-flex flex-column gap-2">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Koshari"
            className="img-fluid rounded-3 w-100"
            style={{ height: '200px', objectFit: 'cover' }}
          />
          <img
            src="https://via.placeholder.com/300x200"
            alt="Bunny Chow"
            className="img-fluid rounded-3 w-100"
            style={{ height: '200px', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Food Offers Banner */}
      <div className="mt-4 p-4 bg-orange text-white rounded-3 position-relative overflow-hidden">
        <h2 className="text-center mb-4 fw-bold text-uppercase">FOOD OFFERS</h2>
        
        <div className="row g-3 align-items-end">
          {/* Burger with 20% OFF */}
          <div className="col-6">
            <img
              src="https://via.placeholder.com/200x150"
              alt="Burger"
              className="img-fluid rounded-3"
              style={{ height: '150px', objectFit: 'cover' }}
            />
            <div className="position-absolute top-0 end-0 mt-2 me-2">
              <div className="bg-white text-orange fw-bold rounded-circle px-3 py-2 text-center">
                20%<br />OFF
              </div>
            </div>
          </div>

          {/* Pizza with 30% OFF */}
          <div className="col-6">
            <img
              src="https://via.placeholder.com/200x150"
              alt="Pizza"
              className="img-fluid rounded-3"
              style={{ height: '150px', objectFit: 'cover' }}
            />
            <div className="position-absolute top-0 end-0 mt-2 me-2">
              <div className="bg-white text-orange fw-bold rounded-circle px-3 py-2 text-center">
                30%<br />OFF
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}