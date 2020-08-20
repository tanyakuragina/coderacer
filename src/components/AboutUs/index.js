import React from 'react';
import './aboutus.css';

function AboutUs() {
  return (
    <>
      <div id="lobbyVideo">
        <video autoPlay muted loop id="background-lobby-video">
          <source src="../lobby.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="vertical-bar">
        <ul>
          <li>
            <a className="vertical-item" href="/home">
              Список игр
            </a>
          </li>
          <li>
            <a className="vertical-item" href="/new-game">
              Создать игру
            </a>
          </li>
          <li>
            <a className="vertical-item" href="/about-us">
              О создателях
            </a>
          </li>
        </ul>
      </div>
      <div className="about-us-back">
        <div className="photo d-flex justify-content-center">
          <img src="we.png" width="830" height="600" id="mainPhoto" />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
