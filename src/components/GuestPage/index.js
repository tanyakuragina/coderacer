import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link, Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
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
  MDBAnimation,
} from 'mdbreact';
import Login from '../Login';
import SignUp from '../SignUp';
import Home from '../Home';
import PrivateRoute from '../PrivateRoute';
import Logout from '../Logout';
import NaviBar from '../NaviBar';
import '../../index.css';

export default function GuestPage() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  if (isAuthenticated) return <Home />;
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
