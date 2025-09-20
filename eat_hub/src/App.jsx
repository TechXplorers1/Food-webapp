import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage.jsx";
import TopRestaurantsPage from "./pages/TopRestaurantspage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/top-restaurants" element={<TopRestaurantsPage />} />
    </Routes>
  );
}

export default App;