import React from 'react';
import './App.css';
import './index.css';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Lobby from './components/Lobby';
import SignUp from './components/SignUp';
import NaviBar from './components/NaviBar';
import Game from './components/Game';
import PrivateRoute from './components/PrivateRoute';
import Test from './components/Test'
// import main from '../public/main.mp4'

function App() {
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
      </Router>
    </>
  );
}

export default App;
