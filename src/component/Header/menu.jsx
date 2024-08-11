// import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './menu.css';
import InputGroup from 'react-bootstrap/InputGroup';
import logo from '../../assets/images/suk-logo.png';



const Appmenu = () => {
  return (
    <div>
    <Navbar expand="lg" className="navbar-dark bg-dark">
      <Container fluid>
        <Navbar.Brand>
        <img src={logo} alt='Logo' className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='menu-list'>
          <Nav
            className="nav-link me-auto "
          >
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="signup">Signup</Nav.Link>
            <Nav.Link href="login">login</Nav.Link>
            
           
          </Nav>
          <div className='desk-comp search-icon'>
            <Form className="d-flex">
              <InputGroup className="">
              <Form.Control
               placeholder="What are you looking for?"
              aria-label="Username"
              aria-describedby="basic-addon1"
              />
            <InputGroup.Text id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
            </InputGroup>
              
            </Form>
            <div className="menu-icon">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </Navbar.Collapse>
        <div className='mobile-comp search-icon'>
            <Form className="d-flex">
              <InputGroup className="">
              <Form.Control
               placeholder="What are you looking for?"
              aria-label="Username"
              aria-describedby="basic-addon1"
              />
            <InputGroup.Text id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
            </InputGroup>
              
            </Form>
            <div className="menu-icon">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
      </Container>
    </Navbar>
    </div>
 )
}

export default Appmenu