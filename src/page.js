import React from 'react';

import "./page.css"
import logo from "./Logo1.jpg"

import { useState,useEffect } from 'react';

  import Aos from "aos"
  import "aos/dist/aos.css"
import { Button } from 'react-bootstrap';
import ScrollAnimation from "react-animate-on-scroll";
function Page() {

    return(
      <>
        <div className='main11'>
        <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="fadeOut"
            duration={0.5}
            delay={0}
          >
    <img className='main-img' src={logo}/> 
    </ScrollAnimation>
<Button variant="primary" size="lg" href='#About'>
About Me
  </Button>
    
        </div>
<hr className='line1'/>
        </>
       

    );
  

}
export default Page
