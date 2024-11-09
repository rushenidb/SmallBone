import React, { useState } from 'react';
import '../Styles/Home.css';

// Importing images and video
import videoFile from '../Videos/Video_Banner.mp4';
import image1 from '../Images/img1Slide.jpg';
import image2 from '../Images/img2Slide.jpg';
import image3 from '../Images/img3Slide.jpg';
import image4 from '../Images/img4Slide.jpg';
import imageRight1 from '../Images/rightImg1.jpg';
import imageRight2 from '../Images/rightImg2.jpg';
import imageRight3 from '../Images/rightImg3.jpg';
import imageLeft1 from '../Images/leftImg1.jpg';
import imageLeft2 from '../Images/leftImg2.jpg';
import imageRight3Hover from '../Images/rightImg3Hover.jpg';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [image1, image2, image3, image4];
  const totalSlides = images.length;

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides); // Go to next slide or wrap around
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides); // Go to previous slide or wrap around
  };

  
  return (
    <div className="home-container">
      <div className="video-banner">
        <video autoPlay muted loop>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="centered-text">
        <p>At Furnishings, we craft custom-made furniture and interiors that blend elegance with practicality. Our designs embody a dedication to quality, inspired by timeless styles and refined craftsmanship. Each piece is carefully handmade, showcasing our commitment to comfort, beauty, and functionality. Furnishings reimagines living spaces with pieces that elevate your home, creating environments that are both inviting and inspiring.</p>
      </div>

      <div>
      <button className="btn-flip" data-front="  Why wait ?  " data-back="Consult Us!">
            {/* Arrange a Consultation */}
        </button>
      </div>

      <div className="slider-container">
        <button className="prev-arrow" onClick={prevSlide}>❮</button>
        <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index + 1}`} />
          ))}
        </div>
        <button className="next-arrow" onClick={nextSlide}>❯</button>
        <div className="slide-indicators">
          {images.map((_, index) => (
            <span key={index} className={index === currentSlide ? "dash active" : "dash"}>—</span>
          ))}
        </div>
      </div>

      <div className="section-image-right">
        <div className="text-left">
            <h1>Jordan Ashford</h1>
            <br />
          <p>We are thrilled to announce Jordan Ashford, the renowned British chef and restaurateur, as the new ambassador for Furnishings. With a distinguished career defined by culinary mastery and a passion for innovation, Jordan perfectly embodies our commitment to quality, craftsmanship, and timeless British design. Together, we celebrate the artistry of bespoke, handcrafted furniture, blending tradition with creativity. Jordan Ashford is the ideal partner to represent Furnishings as we continue to redefine elegant living spaces.</p>
        </div>
        <div className="image-right">
          <img src={imageRight1} alt="jason" />
        </div>
      </div>

      <div className="section-image-left">
        <div className="image-left">
          <img src={imageLeft1} alt="ambassodor"  />
        </div>
        <div className="text-right">
            <h1> As an Ambassador </h1>
            <br />
          <p>Jordan Ashford will collaborate with us to promote our brand, blending his culinary expertise with an exclusive kitchen collection designed to showcase Furnishings’ versatility and appeal. This collection will cater to those who appreciate the seamless integration of luxury, form, and function. In addition, Furnishings is proud to partner with Jordan on his new flagship restaurant, Row on 5 in Savile Row, offering an artisanal culinary experience. Furnishings will be responsible for designing and crafting the restaurant’s kitchen, VIP area, and bespoke wood paneling, ensuring the space reflects our commitment to exquisite craftsmanship.</p>
          <br />
          <p>Jordan Ashford comments: “The connection between myself and Furnishings is rooted in a shared appreciation for British tradition, bespoke artistry, and a passion for creating beautiful, functional kitchens. I am excited to celebrate timeless design and collaborate on this unique partnership in one of London’s most prestigious areas.”</p>
          <br />
          <p>Dylan Fairfax, CEO of Furnishings, comments: “This partnership highlights our dedication to creating custom, high-end kitchens that serve both professional chefs and luxury homeowners. Working with Jordan, one of the UK’s most acclaimed culinary talents, is a testament to the alignment of culinary expertise and refined design. We look forward to combining the finest British craftsmanship, elevating the kitchen into both a functional and artistic masterpiece.”






</p>
        
        </div>
      </div>

      <div className="section-image-right">
        <div className="text-left">
          <h1>Discover Our Virtual <br/>  Showroom Tour</h1>
          <div className="button-container">
        <button>VIEW 360 VIRTUAL TOUR</button>
      </div>
        </div>
        
        <div className="image-right">
          <img src={imageRight2}  alt ="virtual show room tour"/>
        </div>
      </div>

      <div className="section-image-left">
          <div className="image-left">
            <img src={imageLeft2} alt ="home" className='imageleft2' />
          </div>
        <div className="text-right-new">
            <h1>A Furnishings Kitchen</h1>
            <br />
          <p>Furnishings has been designing sophisticated, meticulously crafted kitchens for years, each one carefully created in our dedicated workshop. A Furnishings kitchen is more than just a place to cook—it’s a thoughtfully designed space for living, relaxing, entertaining, and dreaming. Every kitchen is the result of a close collaboration between our designers and clients, perfectly tailored to your unique tastes and needs, using a vast selection of materials and finishes. Explore our collection of timeless and modern luxury kitchens and experience what makes Furnishings truly exceptional.</p>
<br />
                <div className="button-container-new">
        <button>Learn more</button>
      </div>
        </div>
      </div>

      <div className="section-image-right">
        <div className="text-right-new">
            <h1> A Furnishings Home </h1>
            <br />
          <p>At Furnishings, our ethos extends beyond the kitchen to every room in your home, from the bedroom and dressing room to the bathroom, media room, and home office. We specialize in creating whole-home furniture solutions that blend exceptional craftsmanship with bespoke design and innovative storage ideas. Each space is thoughtfully crafted to reflect your personal style, ensuring seamless harmony with your lifestyle. Our commitment to luxury living and attention to detail makes every room an extraordinary experience.</p>
          <br />
          <div className="button-container-new">
        <button>Learn more</button>
      </div>
        
        </div>
        <div className="imageright">
          <img src={imageRight3} alt ="living room before" className='normal-image'/>
          <img src={imageRight3Hover}  alt ="living room after" className="hover-image" />
        </div>
        
      </div>

    </div>
    
  );
}
