import React from 'react';
import Avatar from '../Avatar';
import '../Lobby/lobby.css';

export default function GameProgress(props) {
  const { bgcolor, completed, username } = props;

  const containerStyles = {
    height: 40,
    width: '100%',
    borderRadius: 50,
    margin: 20,
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed * 8}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    display: 'inline-block',
    transition: 'width 1s ease-in-out',
  };

  const carStyles = {
    height: '40px',
    width: '40px',
    display: 'inline-block',
    background: 'url("/fonts/racecar.svg") no-repeat',
  };

  return (
    <div className="row" style={containerStyles}>
      <div className="player">
        <Avatar />
      </div>
      <span style={{ height: '40px', verticalAlign: 'top', fontSize: '25px' }}>{username}</span>
      <div style={fillerStyles} />
      <span style={carStyles} />
    </div>
  );
}
