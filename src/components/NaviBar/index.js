import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, Button, Row } from 'react-bootstrap';
import { FormGroup } from 'reactstrap';
import Login from '../Login';
import Logout from '../Logout';
import './navibar.css';
import Account from '../Account';

export default function NaviBar() {
  const userId = useSelector((state) => state.userId)
  const username = useSelector((state) => state.username)
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const game = useSelector((state) => state.game);
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
            {isAuthenticated ? (<Link to={`/user/${userId}`}>hello, {username}</Link>) : ('')}
            {game &&
              window.location.pathname !== `/game/${game._id}` &&
              window.location.pathname !== `/game` && (
                <Link to={`/game/${game._id}`}>
                  <Button className="mx-3">Вернуться в игру</Button>
                </Link>
              )}
            {isAuthenticated ? <Logout /> : <Login />}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
