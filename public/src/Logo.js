
import React from "react";
import { Zoom } from "react-slideshow-image";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import "./Logo.css"
import ScrollAnimation from "react-animate-on-scroll";
import ScrollableFeed from 'react-scrollable-feed'
// style was imported in index.css
// import "react-slideshow-image/dist/styles.css";

const Logo = () => {
  return (
    <section id="features">
      <>
        <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="fadeOut"
            duration={0.5}
            delay={0}
          >
  <h1 className="heading1">Services</h1>
  
  <hr className="line12"/>
  </ScrollAnimation>
  <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="fadeOut"
            duration={0.5}
            delay={0}
          >
  <div className="background-image">
    <h1 className="heading">Logo Desgining </h1>
  </div>
  </ScrollAnimation>
  <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="fadeOut"
            duration={0.5}
            delay={0}
          >
  <div className="background-image1">
    <h1 className="heading">Video editing </h1>
  </div>
  </ScrollAnimation>
  <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="fadeOut"
            duration={0.5}
            delay={0}
          >
  <div className="background-image2">
    <h1 className="heading">
Logo Animation </h1>
  </div>
  </ScrollAnimation>
  <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="fadeOut"
            duration={0.5}
            delay={0}
          >
  <div className="background-image3">
    

  </div>
  </ScrollAnimation>
 
    </>
    </section>
  );
};

export default Logo
