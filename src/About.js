import React from 'react';
import "./About.css"

import Profile from "./profile.jpeg"
 import Char from './char';
 import {Row,Col,Container} from "react-bootstrap"
 import { useState,useEffect } from 'react';

 import ScrollAnimation from "react-animate-on-scroll";

function About()
{

    return(
        <>


<Container>
  <Row>

  <Col xs={{order:6}} sm={{order:12}} lg={{order:6}}>

        <div className='hex'>
          <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="fadeOut"
            duration={0.5}
            delay={0}
          >     

      
         <img src={Profile}></img> 
         </ScrollAnimation>
         </div>   
        <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="fadeOut"
            duration={0.5}
            delay={0}
          >
            <Col xs={{order:4}} sm={{order:6}} lg={{order:4}}> <div  className='center12'><div>    <h1>MY SKILL</h1><hr></hr></div><Char/></div></Col>
         </ScrollAnimation> </Col>
          <Col xs={{order:6}} sm={{order:12}} lg={{order:6}}><div className='center12'>
<p className='po'>My name is Ezaan Amin I been working as Graphic desginer for 4 years.If you like my work. You can contact me</p></div></Col>

</Row>

</Container>


       
   </>



    );
}
export default About;