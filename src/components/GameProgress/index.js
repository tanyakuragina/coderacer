import React from 'react';
import Avatar from '../Avatar';
import '../Lobby/lobby.css';
import './index.css';

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
    color: bgcolor,
  };

  const carStyles = {
    height: '40px',
    width: '40px',
    display: 'inline-block',
    background: 'url("/fonts/red.png") no-repeat',
  };

  return (
    <>
      <div
        style={containerStyles}
        className="row player"
      >
        <div className="avatar">
          <Avatar />
        </div>
        <span style={{
          height: '40px',
          verticalAlign: 'top',
          fontSize: '25px',
          margin: '8px',
          color: 'white'
        }}>{username}</span>
        <div style={fillerStyles}>.</div>
        <span style={carStyles} />
      </div >
    </>);
}
