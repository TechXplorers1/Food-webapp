import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FoodOffers.css';

// Import your images
import Restaurant from "../assets/Queenofshaba.png";
import Dish1 from "../assets/dish3.png";
import Dish2 from "../assets/greenchillichicken.png";
import Dish3 from "../assets/Waayke.png";
import Dish4 from "../assets/BeenCut.png";
import Dish5 from "../assets/Koshari.png";
import Dish6 from "../assets/BunnyChow.png";
import FoodOffersImage from "../assets/FoodOffersImg.png";

export default function FoodOffers({ mode = "full" }) {
  return (
    <div className="food-offers-section">
      {/* Render Grid if mode === "grid" or "full" */}
      {(mode === "grid" || mode === "full") && (
        <>
          {/* Star Item Header */}
          <h5 className="fw-bold mb-3">star item</h5>

          <div className="row g-3 align-items-start">
            {/* Left Column: Queen of Sheba */}
            <div className="col-md-4 col-12">
              <div className="image-container rounded-3 overflow-hidden position-relative">
                <img
                  src={Restaurant}
                  alt="Queen of Sheba"
                  className="img-fluid w-100"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Center Column: 4 Small Images */}
            <div className="col-md-4 col-12 d-flex flex-column gap-2">
              <div className="image-container rounded-3 overflow-hidden position-relative">
                <img
                  src={Dish1}
                  alt="Dish 1"
                  className="img-fluid w-100"
                  style={{ height: '120px', objectFit: 'cover' }}
                />
                <div className="image-label position-absolute bottom-0 start-0 p-1 text-white fw-bold">
                  Efo Riro
                </div>
              </div>
              <div className="image-container rounded-3 overflow-hidden position-relative">
                <img
                  src={Dish2}
                  alt="Efo Riro"
                  className="img-fluid w-100"
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <div className="image-label position-absolute bottom-0 start-0 p-1 text-white fw-bold">
                  Waayke
                </div>
              </div>
              <div className="d-flex gap-2">
                <div className="image-container rounded-3 overflow-hidden position-relative" style={{ flex: 1 }}>
                  <img
                    src={Dish3}
                    alt="Waayke"
                    className="img-fluid w-100"
                    style={{ height: '90px', objectFit: 'cover' }}
                  />
                  <div className="image-label position-absolute bottom-0 start-0 p-1 text-white fw-bold">
                    Bean Stew
                  </div>
                </div>
                <div className="image-container rounded-3 overflow-hidden position-relative" style={{ flex: 1 }}>
                  <img
                    src={Dish4}
                    alt="Bean Stew"
                    className="img-fluid w-100"
                    style={{ height: '90px', objectFit: 'cover' }}
                  />
                  <div className="image-label position-absolute bottom-0 start-0 p-1 text-white fw-bold">
                    Waxyke
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Koshari & Bunny Chow */}
            <div className="col-md-4 col-12 d-flex flex-column gap-2">
              <div className="image-container rounded-3 overflow-hidden position-relative">
                <img
                  src={Dish5}
                  alt="Koshari"
                  className="img-fluid w-100"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="image-label position-absolute bottom-0 end-0 p-2 text-white fw-bold">
                  Koshari
                </div>
              </div>
              <div className="image-container rounded-3 overflow-hidden position-relative">
                <img
                  src={Dish6}
                  alt="Bunny Chow"
                  className="img-fluid w-100"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="image-label position-absolute bottom-0 end-0 p-2 text-white fw-bold">
                  Bunny Chow
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Render Banner if mode === "banner" or "full" */}
      {(mode === "banner" || mode === "full") && (
        <div className="mt-4">
          <div className="food-offers-image-container">
            <img
              src={FoodOffersImage}
              alt="Food Offers"
              className="img-fluid w-100"
              style={{ height: 'auto', objectFit: 'cover' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
