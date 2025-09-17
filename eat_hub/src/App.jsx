import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage.jsx";
import FeaturesSection from "./Components/Featurespage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/features" element={<FeaturesSection />} />
    </Routes>
  );
}

export default App;