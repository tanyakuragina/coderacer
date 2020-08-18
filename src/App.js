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

function App() {
  const isAuthorized = useSelector((state) => state.isAuthorized);
  return (
    <>
      <NaviBar />
      <Router>
        <Switch>
          <Route exact path="/game">
            <Game />
          </Route>
          <Route exact path="/game/:id">
            <Lobby />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/lobby">
            <Lobby />
          </Route>
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
