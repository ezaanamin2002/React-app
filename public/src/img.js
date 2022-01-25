import React from 'react';
import "./img.css"
import {Row,Col,Container} from "react-bootstrap"
import TIME from "./TIME.png"
import FAST from "./FAST.png"
import COM from "./COM.png"
import ICON from "./ICONS.png"


import ScrollAnimation from "react-animate-on-scroll";



function Img() {


 
   return(
     <>
 

<section id='About'>



<Container>
      <Row>
     
        <div className='img'  >
        <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="fadeOut"
            duration={0.5}
            delay={0}
          >
         <Col xs={{order:4}} sm={{order:6}} lg={{order:4}}><img className='img-size1'  src={FAST}></img></Col>
         </ScrollAnimation>
    </div> 
   
    <div className='img'>
    <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="fadeOut"
            duration={0.5}
            delay={0}
          > 
    <Col xs={{order:4}} sm={{order:6}} lg={{order:4}}><img className='img-size1'  src={TIME}></img></Col>
    </ScrollAnimation> </div>    </Row>
   
</Container>
   







<Container>
  <Row>

   
       
    
 <Col xs={{order:4}} sm={{order:6}} lg={{order:4}}><h1 className='center'>     <strong>Delivery on Time</strong></h1> <p className='center'>Art is a delivery for worldwide   </p></Col> 
  <Col xs={{order:4}} sm={{order:6}} lg={{order:4}}><h1 className='center' ><strong>Time Management</strong></h1> <p className='center'>Time is more valuable than money. </p></Col>

   

    </Row>
</Container>
<Container>
  <Row>
  <div className='img' >
  <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="fadeOut"
            duration={0.5}
            delay={0}
          > 
    <Col xs={{order:4}} sm={{order:6}} lg={{order:4}}><img className='img-size1' src={COM}></img></Col>
    </ScrollAnimation>  
    </div>
    <div className='img' >
    <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="fadeOut"
            duration={0.5}
            delay={0}
          > 
    <Col xs={{order:4}} sm={{order:6}} lg={{order:4}}><img className='img-size1' src={ICON}></img></Col>
    </ScrollAnimation>  
    </div>
   
    


  </Row>
</Container>

<Container>
  <Row>
 
    <Col xs={{order:4}} sm={{order:6}} lg={{order:4}}><h1 className='center' ><strong> Excellent Communication </strong></h1> <p className='center'>The greatest communication skill is paying value to other  </p></Col>
    <Col xs={{order:4}} sm={{order:6}} lg={{order:4}}><h1 className='center'><strong>Innovation  </strong></h1> <p className='center'>Change calls for innovation.Innovation leads to progess  </p></Col>
 

  </Row>
</Container>
</section>
</>


  

  
  
   



   );
   }
export default Img