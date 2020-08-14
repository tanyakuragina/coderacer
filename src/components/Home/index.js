import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';

export default function Home() {
  const [data, setData] = useState('Идет загрузка...');
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/home');
      const json = await response.json();
      setData(JSON.stringify(json));
    })();
  }, []);
  return (
    <div className="background_home">
      <h2 id="chui-color">ЧУИ МЫ ДОМА</h2>
      <Router>
        <Switch>
          <Route path="/game">
            <Home />
          </Route>
          <Link to="/game">Войти в игру</Link>
        </Switch>
      </Router>
    </div>
  );
}
