import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./Pages";
import ContactUs from "./Pages/ContactUs";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BrochureRequest from "./Pages/BrochureRequest";
import WholeHouseFurniture from "./Pages/WholeHouseFurniture";
import OnlineShop from "./Pages/OnlineShop";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/brochure-request" element={<BrochureRequest />} />
        <Route path="/whole-house-funriture" element={<WholeHouseFurniture />} />
        <Route path="/online-shop" element={<OnlineShop />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
