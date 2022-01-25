import React from 'react';
import  "./contact.css"
import emailjs from 'emailjs-com';
import {Row,Col,Container} from "react-bootstrap"
import ScrollAnimation from "react-animate-on-scroll";
import {FaFacebook,FaInstagram,FaLinkedin,FaWhatsapp} from "react-icons/fa"
function ContactMe()
{
    function sendMail(e)
    {
        e.preventDefault();
        emailjs.sendForm('service_3nes20r','template_8usbv1p',e.target,"user_dn4K7e9eCIGc8dDdKbOrl").then(res=>{
            console.log(res);
            
        }).catch(error=>console.log(error))
        }
  
    return(
        <>
<Col xs={{order:4}} sm={{order:6}} lg={{order:4}}>
    <section id='contact'>
         <div className='maincolor11' >
         <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="fadeOut"
            duration={0.5}
            delay={0}
          >
         <h1 className='head'>Contact Us</h1>
         <hr className='line2'></hr>
   
         <div className='center 1'>
         <center><form classname="main12"   onSubmit={sendMail}>
         <input className='main12' type="text" name="name" placeholder='Name'></input>
             <input className='main12' type="email" name="email" placeholder='Email'></input>
             <textarea className='main12'  name="message" placeholder='Message' rows="3" cols="30"></textarea>
            
             <button  className='main13' onSubmit={sendMail}>Send</button>;
         </form></center></div>
         <h3><a   href="https://www.facebook.com/profile.php?id=100040772253920"><FaFacebook/></a><a  href="https://www.instagram.com/baggastudios/"><FaInstagram/></a> <a  href="https://www.linkedin.com/in/muhammad-usman-shafique-437175185/"><FaLinkedin/></a><a  href="https://wa.me/923249420814?text=Hi%20There!"><FaWhatsapp/></a></h3>
         </ScrollAnimation>
<p className='main'>Ezaan Amin © {new Date().getFullYear()}  </p>     
         </div>
         </section>
         </Col>
        </>
    )
}
export default ContactMe;