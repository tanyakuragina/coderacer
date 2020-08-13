import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CodePage from './components/CodePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>

        <Route exact path="/code">
          <CodePage />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
