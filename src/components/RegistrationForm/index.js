import React from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import styles from './style.module.css';

function RegistrationForm() {
  const instyle = {
    display: 'flex',
    border: '1px solid black',
    background: 'grey',
    // width: '600px',
  };

  return (
    // <Card style={{ width: '18rem' }}>

    <div
      className={`d-flex justify-content-md-end m-3 p-2`}>
      {/* className={styles.cardbody}> */}


      < Form className={`${styles.instyle} w-25 p-3`} >
        <Form.Group as={Row} controlId="formHorizontalEmail">

          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">

          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <fieldset>
          <Form.Group as={Row}>
            <Col sm={10}>
            </Col>
          </Form.Group>
        </fieldset>
        <Form.Group as={Row} controlId="formHorizontalCheck">
          <Col sm={{ offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Sign up!</Button>
          </Col>
        </Form.Group>
      </Form >
    </div >
    // </Card >
  );
}

export default RegistrationForm;
