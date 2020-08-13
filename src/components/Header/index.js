import React from 'react';
import './index.css';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import BackGroundImage from '../BackgroundImage';
import RegistrationForm from '../RegistrationForm';

function Header() {

  return (
    <>
      {/* <div style={{ backgroundImage: 'https://mdbootstrap.com/img/Photos/Others/images/91.jpg' }} /> */}

      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Code racer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>

          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="login" className="mr-sm-2" />
            <FormControl type="text" placeholder="password" className="mr-sm-2" />
            <Button variant="outline-success">Sign up</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <RegistrationForm />

      <Container>
        <Row>
          <Col>1</Col>
          <Col>2</Col>
        </Row>
      </Container>
    </>
  )
}

export default Header;
