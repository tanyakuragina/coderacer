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
import Game from '../Game';
import '../../index.css';

export default function GuestPage() {

  return (
    <>
      <div id="classicformpage" />
      
    </>
  );
}
