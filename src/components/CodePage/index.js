import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './style.module.css';

function CodePage() {
  return (

    <div className="flexbox-container">

      <div >

        <form className="form-group">
          {/*  className={`${styles.instyle} w-25 p-3`} */}
          <label htmlFor="exampleFormControlTextarea1">
            Задание
        </label>

          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          />
          <label htmlFor="exampleFormControlTextarea1">
            Код
            </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          />
          <Button>Г А З</Button>
        </form >
      </div >

      {/* <div> */}
      < textarea

        className="form-control"
        id="exampleFormControlTextarea1"
        rows="5"
      />
      {/* </div> */}
    </div >
  );
}

export default CodePage;
