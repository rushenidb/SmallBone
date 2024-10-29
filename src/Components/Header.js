import React, { useState, useEffect } from "react";
import "../Styles/Header.css"; // Make sure the path is correct
import NavigationModal from "./NavigationModal";
import logo from "../Images/logo.png"; // Import the logo image

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      // console.log("Scrolled:", scrolled); // Debugging log
    };

    // Adding scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle the modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <header className={isScrolled ? "header scrolled" : "header"}>
        <nav className="navbar">
          <div className="nav-left">
            <button className="menu-icon" onClick={toggleModal}>
              &#9776; Menu
            </button>
            <span>|</span>
            <button className="home-button">Home</button>
          </div>
          <div className="nav-middle">
            {/* Add logo image next to the text */}
            <img src={logo} alt="Smallbone Logo" className="logo-image" />
            <div className="logo-text">F U R N I S H I N G S </div>
          </div>
          <div className="nav-right">
            <a href="/contact">
              <button className="nav-button contact">Contact Us</button>
            </a>
            <a href="/brochure-request">
              <button className="nav-button special">Brochure Request</button>
            </a>
          </div>
        </nav>
      </header>
      {/* Modal Component */}
      <NavigationModal isOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  );
};

export default Header;
