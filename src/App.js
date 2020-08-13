import React from 'react';
import './App.css';
// import SignUp from './components/SignUp';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SignUp from './components/SignUp';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
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
    </Router>
  );
}

export default App;
