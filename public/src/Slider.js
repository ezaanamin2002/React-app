import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slideshow3 from "./slideshow3.png"
import slideshow2 from "./slideshow2.png"
import slideshow1 from "./slideshow1.png"
import ScrollAnimation from "react-animate-on-scroll";
const fadeImages = [
slideshow1,
slideshow2,
slideshow3
];

export default function Slideshow() {
  return (
    <ScrollAnimation
    animateIn="bounceInRight"
    animateOut="fadeOut"
    duration={0.5}
    delay={0}
  >
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <img src={fadeImages[0]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[2]} />
        </div>
      </Fade>
   
     
    </div>
     </ScrollAnimation>
  );
}
       


