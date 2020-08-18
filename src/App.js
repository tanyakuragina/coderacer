import React from 'react';
import './App.css';
import './index.css';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './components/Home';
import Lobby from './components/Lobby';
import SignUp from './components/SignUp';
import NaviBar from './components/NaviBar';
import Game from './components/Game';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const isAuthorized = useSelector((state) => state.isAuthorized);
  return (
    <>
      <NaviBar />
      <Router>
        <Switch>
          <PrivateRoute exact path="/game">
            <Game />
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
          <Route exact path="/">
            <SignUp />
          </Route>
        </Switch>
        {!isAuthorized && <Redirect to="/" />}
      </Router>
    </>
  );
}

export default App;
