import React from 'react';
import './test.css'

function Test() {
  return (
    <>
      <div id="mainVideo">
        <video autoPlay muted loop id='background-video'>
          <source src="main.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <h1>Text</h1>
      </div>
    </>
  );
}

export default Test;
