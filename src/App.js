import React from 'react';
import './App.css';
// import SignUp from './components/SignUp';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SignUp from './components/SignUp';
// import Home from './components/Home';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <header>
            <Link to="/login">Войти</Link>
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
