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
        <p>At Smallbone, we make bespoke kitchens and furniture like no other. A showcase of time-honoured British design and craftsmanship, we have been at the forefront of luxury, artisanal cabinetry for more than 40 years. Handmade in the heart of Wiltshire, our award-winning designs have revolutionised the home and pioneered an inspirational new way of living that is celebrated throughout the world.</p>
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
            <h1>Jason Atherton</h1>
            <br />
          <p>We are delighted to announce, the renowned British chef and restaurateur as the new ambassador for Smallbone. Having built a reputation for his Michelin-starred restaurants and culinary expertise, Jason is the perfect fit to represent our brand as we both share a commitment to quality, British heritage, handcrafted creativity and innovation.</p>
        </div>
        <div className="image-right">
          <img src={imageRight1} alt="Right side image" />
        </div>
      </div>

      <div className="section-image-left">
        <div className="image-left">
          <img src={imageLeft1} alt="Left side image" />
        </div>
        <div className="text-right">
            <h1> As an Ambassador </h1>
            <br />
          <p>Jason will collaborate with us to promote our brand, integrating his culinary insight into an exclusively designed kitchen collection showcasing Smallbone’s versatility and appeal to those who value both luxury form and function. Additionally, Smallbone is partnering with Jason on his new flagship restaurant Row on 5 in Savile Row, an artisanal culinary experience. Smallbone will be involved in the design and manufacture of the restaurant’s kitchen, VIP area, and bespoke wood panelling, ensuring the space exemplifies our brand’s commitment to handcrafted artistry.</p>
          <br />
          <p>Jason Atherton comments: “The synergy between myself and Smalbone is really quite simple, we share deep-rooted values of British tradition, bespoke craftsmanship and a passion for beautiful kitchens. I look forward to both celebrating timeless design with functionality and creating the best partnership in the most prestigious street in Mayfair.”</p>
          <br />
          <p>Ron Shemesh, CEO of Smallbone comments: “This collaboration exemplifies Smallbone’s dedication to crafting custom, high-end kitchens that cater to both professional chefs and luxury homeowners. We are excited to be working with Jason and his team the most renowned British culinary talent who has not only excelled in the UK but also achieved two Michelin stars internationally, this totally underscores the alignment of culinary mastery with luxury design. We will be bringing together the best of British craftsmanship, elevating the kitchen space into a functional and artistic domain.”</p>
        
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
          <img src={imageRight2} alt="Right side image" />
        </div>
      </div>

      <div className="section-image-left">
          <div className="image-left">
            <img src={imageLeft2} alt="Left side image" className='imageleft2' />
          </div>
        <div className="text-right-new">
            <h1>A Smallbone Kitchen</h1>
            <br />
          <p>Smallbone have been designing intelligent, impeccably crafted kitchens from our Devizes workshop for decades. A Smallbone kitchen is much more than a room in which to cook. A meticulously planned and handcrafted space created for living, relaxing, entertaining and dreaming, each is a close collaboration between designer and client, precisely tailored to your tastes and requirements from an almost infinite palette of materials and finishes. Explore our range of classic and contemporary luxury kitchens and discover what sets Smallbone apart.</p>
<br />
                <div className="button-container-new">
        <button>Learn more</button>
      </div>
        </div>
      </div>

      <div className="section-image-right">
        <div className="text-right-new">
            <h1> A Smallbone Home </h1>
            <br />
          <p>Our ethos extends to the bedroom, dressing room, bathroom, media room and home office – any conceivable room within the home. The epitome of luxury living, our whole-home furniture solutions combine the finest hand-craftsmanship and bespoke detailing with beautiful, original design and creative storage ideas. Each unique space is carefully considered and designed to harmonise perfectly with your lifestyle.</p>
          <br />
          <div className="button-container-new">
        <button>Learn more</button>
      </div>
        
        </div>
        <div className="imageright">
          <img src={imageRight3} alt="Rightside image" className='normal-image'/>
          <img src={imageRight3Hover} alt="Hover side image" className="hover-image" />
        </div>
        
      </div>

    </div>
    
  );
}
