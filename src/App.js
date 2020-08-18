import React from 'react';
import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';
import GuestPage from './components/GuestPage';
import Home from './components/Home';
import Login from './components/Login';
import Lobby from './components/Lobby';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';
import NaviBar from './components/NaviBar';
import Game from './components/Game';


function App() {
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
            <GuestPage />
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
