import React from 'react';
import Avatar from '../Avatar';
import './index.css';
// import '../Lobby/lobby.css';

export default function GameProgress(props) {
  const { bgcolor, completed, username } = props;

  const containerStyles = {
    width: '100%',
    borderRadius: 8,
    margin: 18,
    'align-items': 'center',
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
    <div className="player d-flex" style={containerStyles}>
      <div className="border">
        <Avatar avatarSource="/avatar1.jpg" />
      </div>
      <span style={{ height: '40px', verticalAlign: 'middle', fontSize: '25px' }} className="playerFont m-3">{username}</span>
      <div style={fillerStyles} />
      <span style={carStyles} />
    </div>
  );
}
