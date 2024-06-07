import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from "./components/Hero"
import FeedIngredients from "./components/FeedIngredients"
import Products from "./components/Products"
import Footer from "./components/Footer"
import About from "./components/About"
import Services from "./components/Services"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Hero />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/feed-meal-ingredients" element={<FeedIngredients />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/our-services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App
