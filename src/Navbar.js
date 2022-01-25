import React from 'react';
import { Navbar,Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Navbar.css"

import logo1 from "./l1.jpg"
function NavBar() {
return(
  <>
 <Navbar bg="black" variant="dark" color='white'>
    <Container>

    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>  
      <Nav.Link href="#About">About Me</Nav.Link>
      <Nav.Link href="#features">Services</Nav.Link>
      <Nav.Link href="#price">Pricing</Nav.Link>
    
      <Nav.Link href="#contact">Contact </Nav.Link>
    </Nav>
    </Container>
  </Navbar>



</>
)};


export default NavBar;