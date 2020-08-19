import React from 'react';
import './details.css';

function Details() {
  return (
    <>
      <div className="details">
        <div className="window-one">
          <img
            src="task.png"
            width="250"
            height="250"
            alt="альтернативный текст"
            className='info'
          />
          <h2 className="master m-4">
            Присоединись к игре
            <br />или создай свою
          </h2>
        </div>
        <div className="window-two">
          <h2 className="master m-4">
            Совершенствуй мастерство
            <br />в JavaScript
          </h2>
          <img
            src="js.png"
            width="250"
            height="250"
            alt="альтернативный текст"
            className="info"
          />
        </div>
        <div className="window-three">
          <img
            src="preview.jpg"
            width="250"
            height="250"
            alt="альтернативный текст"
            className='info'
          />
          <h2 className="master m-4">
            Займи достойное место
            <br />в турнирной таблице
          </h2>
        </div>
      </div>
    </>
  );
}

export default Details;
