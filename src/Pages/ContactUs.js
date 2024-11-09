// import React, { useState } from "react";
import "../Styles/Contact.css";
import contact1 from "../Images/contact1.jpg";
import contact2 from "../Images/contact2.jpg";
import contact3 from "../Images/contact3.png";
import contact4 from "../Images/contact4.jpg";

export default function ContactUs() {
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   surname: "",
  //   email: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  // };

  return (
    <div>
      <div className="contact-us">
        <center>
          <h1>Contact Us</h1>
        </center>

        {/* New Enquiries Section */}
        <section className="contact-section">
          <h2>New Enquiries</h2>
          <p>
          To learn more about Furnishings or to schedule a personal consultation with one of our expert designers, please call us in the UK on <strong>+44 (0) 20 1234 5678</strong> or in the US on <strong>+1 800 123 4567.</strong>. Alternatively, you can email us at
            <a href="mailto: info@furnishings.com">  info@furnishings.com</a>
          </p>
          <button className="btn-brochure">Request a Brochure</button>
        </section>

        {/* Existing Customers Section */}
        <section className="contact-section">
          <h2>Existing Customers</h2>
          <p>
            If you would like to contact our Customer Service team, please call <strong>+44 (0) 20 1234 5678</strong>. Alternatively, email us at
            <a href="mailto:customer.services@furnishings.com"> customer.services@furnishings.com</a>.
          </p>
          <p>Customer service opening hours are Monday to Friday 9am – 5:30pm (excluding bank holidays)</p>
        </section>

        {/* Press & Marketing Section */}
        <section className="contact-section">
          <h2>Press & Marketing</h2>
          <p>
            For all press requests and marketing enquiries, please contact:
            <a href="mailto:theo.kensington@luxgroupholdings.com"> theo.kensington@luxgroupholdings.com</a>
          </p>
        </section>
      </div>

      {/* Design Meetings and Locations with animated images */}
      <div className="design-meeting">
        <div className="left-section">
          <div className="office-image fadeIn1">
            <img src={contact1} alt="Office Design" />
          </div>
        </div>
        <div className="right-section">
          <h2>Arrange a Design Meeting</h2>
          <p>To request a meeting with a furnishings designer, contact us on the details below or use our enquiry form.</p>
          <div className="contact-info">
            <div className="contact-item">
              <h3>UK</h3>
              <p>+44 (0) 20 1234 5678</p>
              <p>enquiries@furnishings.co.uk</p>
            </div>
            <div className="contact-item">
              <h3>US</h3>
              <p>+1 800 123 4567</p>
              <p>govirtual@furnishingsusa.com</p>
            </div>
          </div>
          <button className="design-meeting-button">Arrange a Design Meeting</button>
        </div>
      </div>

      <div className="design-meeting">
        <div className="right-section">
          <h2>Our Locations</h2>
          <p>KNIGHTSBRIDGE STUDIO – BY PRIVATE APPOINTMENT 200 Kensington High Street, London W8 7RG</p>
          <div className="contact-info">
            <div className="contact-item">
              <h5>DEVIZES WORKSHOP</h5>
              <p>The Oakwood Workshop, Somerset BA3 4RD</p>
              <p>+44 (0)4576 274 121</p>
            </div>
            <div className="contact-item">
              <h5>NEW YORK MADISON AVENUE SHOWROOM – OPENING SOON</h5>
              <p>
              120 Hudson Street, New York, NY 10013</p>
              <p>+1 245 327 30124</p>
            </div>
          </div>
        </div>
        <div className="left-section">
          <div className="office-image fadeIn2">
            <img src={contact2}  alt ="leftside contact"/>
          </div>
        </div>
      </div>

      <div className="design-meeting">
        <div className="right-section">
          <h2>Brochure Request</h2>
          <p>Featuring more details about our History & Heritage, Kitchen Collections, and Whole House Furnishings, you can request a copy of our brochure by completing the form linked below.</p>
          <div className="contact-info">
            <button className="design-meeting-button">Request a Brochure</button>
          </div>
        </div>
        <div className="left-section">
          <div className="office-image fadeIn3">
            <img src={contact3} alt ="rightside contact"/>
          </div>
        </div>
      </div>

      <div className="design-meeting">
        <div className="left-section">
          <div className="office-image fadeIn4">
            <img src={contact4} alt="Office Design3" />
          </div>
        </div>
        <div className="right-section">
          <h2>Careers at furnishings</h2>
          <p>Furnishings is always seeking the most talented designers, installation managers, and technical assistants with exceptional CAD skills. To find out more, please send your resume with a covering letter to careers@furnishings.co.uk</p>
          <div className="contact-info">
            <button className="career-btn">Apply now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
