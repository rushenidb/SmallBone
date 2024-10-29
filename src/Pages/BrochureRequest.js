import React, { useState } from 'react';
import "../Styles/BrochureRequest.css";

const BrochureRequest = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    country: "",
    postalCode: "",
    findUs: "",
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Process form submission here
  };

  return (
    <div className="form-container">
      <h1>Request a Brochure</h1>
      <p>To request a copy of our brochure please submit your details below.</p>
      <form onSubmit={handleSubmit}>
        {/* Title (half-width on line 1) */}
        <div className="form-group half-width">
          {/* <label htmlFor="title">Title</label> */}
          <select name="title" value={formData.title} onChange={handleChange}>
            <option value="">Title</option>
            <option value="Mr">Mr</option>
            <option value="Ms">Ms</option>
            <option value="Mrs">Mrs</option>
            <option value="Dr">Dr</option>
          </select>
        </div>

        {/* First Name & Surname (on same line) */}
        <div className="form-row">
          <div className="form-group half-width">
            {/* <label>First Name</label> */}
            <input
            placeholder='Firstname'
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group half-width">
            {/* <label>Surname</label> */}
            <input
            placeholder='Surtname'
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Email Address (full width) */}
        <div className="form-group">
          {/* <label>Email Address</label> */}
          <input
          placeholder='Email Address'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Phone Number (half-width) */}
        <div className="form-group half-width">
          {/* <label>Phone Number</label> */}
          <input
          placeholder='Phone Number'
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Country/Region (full width with dropdown arrow) */}
        <div className="form-group">
          <label>Country / Region (please select)</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>
          </select>
        </div>

        {/* ZIP / Postal Code */}
        <div className="form-group half-width">
          <label>ZIP / Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
          />
        </div>

        {/* Find Address button */}
        <div className="form-group">
          <button type="button" className="find-address-btn">
            Find Address
          </button>
        </div>

        {/* How did you find us? (half-width) */}
        <div className="form-group half-width">
          {/* <label>How did you find us?</label> */}
          <select name="findUs" value={formData.findUs} onChange={handleChange}>
            <option value="">How did you find us?</option>
            <option value="internet">Internet Search</option>
            <option value="friend">Friend</option>
            <option value="ad">Advertisement</option>
          </select>
        </div>

        {/* Consent checkbox with customized text */}
        <div className="form-group checkbox">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
          />
          <label>
            By submitting this form, you consent to having your data processed as shown in our <span className="privacy-policy-text"> Privacy Policy</span> and opt-in to receive marketing communication from Smallbone. 
            .
          </label>
        </div>

        {/* reCAPTCHA (I'm not a robot)
        <div className="form-group checkbox">
          <input type="checkbox" />
          <label>I'm not a robot</label>
        </div> */}

        {/* Submit Button in the middle */}
        <div className="form-group submit-button">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default BrochureRequest;
