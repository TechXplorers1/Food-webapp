import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage.jsx";
import TopRestaurantsPage from "./pages/TopRestaurantspage.jsx";
import RestaurantDetails from "./pages/RestaurantDetails.jsx";
import HomeFoodDetails from "./pages/HomeFoodDetails.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/top-restaurants" element={<TopRestaurantsPage />} />
      <Route path="/restaurant/:id" element={<RestaurantDetails />} />
      <Route path="/homefooddetails/:id" element={<HomeFoodDetails />} />
    </Routes>
  );
}

export default App;