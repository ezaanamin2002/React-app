import React from 'react';

import "./page2.css"


import ScrollAnimation from "react-animate-on-scroll";
function Page2() 
{

    return(
        <>
            <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="fadeOut"
            duration={0.5}
            delay={0}
          >
       <h1 className='about'>About </h1>
       <hr className='line12'/>
</ScrollAnimation>
     
        </>
    );
  
  

}
export default Page2
