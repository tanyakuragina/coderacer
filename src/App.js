import React from 'react';
import './App.css';
import './index.css';
import GuestPage from './components/GuestPage';
import Home from './components/Home';
import UserStatsList from './components/UserStatsList';

function App() {
  return (
    <>
      <GuestPage />
      {/* <Home /> */}
      <UserStatsList />
    </>
  );
}

export default App;
