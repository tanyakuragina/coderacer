import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Lobby from './components/Lobby';
import SignUp from './components/SignUp';
import NaviBar from './components/NaviBar';
import Game from './components/Game';
import PrivateRoute from './components/PrivateRoute';
import NewGame from './components/NewGame';
import Details from './components/Details';
import Account from './components/Account';
import AboutUs from './components/AboutUs';
import Finish from './components/Finish';

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Switch>
          <PrivateRoute exact path="/about-us">
            <AboutUs />
          </PrivateRoute>
          <PrivateRoute exact path="/user/:id">
            <Account />
          </PrivateRoute>
          <PrivateRoute exact path="/game">
            <Game />
          </PrivateRoute>
          <PrivateRoute exact path="/new-game">
            <NewGame />
          </PrivateRoute>
          <PrivateRoute exact path="/game/:id">
            <Lobby />
          </PrivateRoute>
          <PrivateRoute exact path="/home">
            <Home />
          </PrivateRoute>
          <PrivateRoute exact path="/lobby">
            <Lobby />
          </PrivateRoute>
          <PrivateRoute path="/finish/:id">
            <Finish />
          </PrivateRoute>
          <Route exact path="/">
            <SignUp />
            <Details />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
