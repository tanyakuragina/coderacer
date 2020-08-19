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
import NewGame from './components/NewGame';
import Test from './components/Test';
import Details from './components/Details'
// import main from '../public/main.mp4'

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Switch>
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
          <Route exact path="/">
            {/* <SignUp /> */}
            <SignUp />
            <Details />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
