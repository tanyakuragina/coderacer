import React from 'react';
import Login from '../Login';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SignUp from '../SignUp';
import Home from '../Home';
import PrivateRoute from '../PrivateRoute';
import Logout from '../Logout';
import { useSelector } from 'react-redux';
import NaviBar from '../NaviBar';
import '../../../src/index.css';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFormInline,
  MDBAnimation
} from "mdbreact";

export default function GuestPage() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  return (
    <div id="classicformpage">
      <Router>
        <Switch>
          <NaviBar>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
          </NaviBar>
          <Route path="/signup">
            <SignUp />
          </Route>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <Route path="/">
            <header>
              {!isAuthenticated && <Link to="/login">Войти</Link>}
              {isAuthenticated && <Link to="/logout">Выйти</Link>}
              &nbsp;
              <Link to="/signup">Зарегистрироваться</Link>
              &nbsp;
              <Link to="/home">Главная</Link>
            </header>
          </Route>
        </Switch>
        <SignUp />
      </Router>
    </div>
  );
}
