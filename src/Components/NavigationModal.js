import React from "react";
import "../Styles/NavigationModal.css";
import { Link } from "react-router-dom";

const NavigationModal = ({ isOpen, toggleModal }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={toggleModal}>
          &times;
        </button>
        <nav className="modal-nav">
          <ul onClick={toggleModal}>
            <Link to="/"><li>Home</li></Link>
            <li>Kitchen Collections</li>
            <Link to="/whole-house-funriture">
              <li>Whole House Furniture</li>
            </Link>
            <Link to="/online-shop">
              <li>Online Shop</li>
            </Link>
            <li>Prestigious Addresses</li>
            <li>About Smallbone</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavigationModal;
