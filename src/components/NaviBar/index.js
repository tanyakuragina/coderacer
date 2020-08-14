import React from 'react';
import { useSelector } from 'react-redux';
import {
  Navbar, Nav, Form, Button, Row,
} from 'react-bootstrap';
import { FormGroup } from 'reactstrap';
import Login from '../Login';
import Logout from '../Logout';
import './navibar.css';

export default function NaviBar() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  return (
    <>
      <Navbar variant="dark" expand="lg" id="navibar">
        <Navbar.Brand id="codeTitle" href="/">
          CodeRacer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" />
          <Form inline>
            {isAuthenticated ? <Logout /> : <Login />}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
