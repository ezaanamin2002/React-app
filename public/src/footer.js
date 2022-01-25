import React from 'react';
import "./footer.css"
import {FaFacebook,FaInstagram,FaLinkedin,FaWhatsapp} from "react-icons/fa"
import {Row,Col,Container} from "react-bootstrap"
function Footer()
{
    return(
    <>
        <div className='maincolor'>
    
     
  <h3><a   href="https://www.facebook.com/profile.php?id=100040772253920"><FaFacebook/></a><a  href="https://www.instagram.com/baggastudios/"><FaInstagram/></a> <a  href="https://www.linkedin.com/in/muhammad-usman-shafique-437175185/"><FaLinkedin/></a><a  href="https://wa.me/923249420814?text=Hi%20There!"><FaWhatsapp/></a></h3>

        <p className='main'>Ezaan Amin © {new Date().getFullYear()}  </p>

       

        </div>
        
         
     
    </>
    );

}
export default Footer