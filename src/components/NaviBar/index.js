import React from 'react';
import { Navbar, Nav, Form, Button, Row } from 'react-bootstrap';
import Login from '../Login';
import { FormGroup } from 'reactstrap';
import './navibar.css';

export default function NaviBar() {
  return (
    <>
      <Navbar variant="dark" expand="lg" id="navibar">
        <Navbar.Brand id="codeTitle" href="#home">
          CodeRacer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <Login />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
