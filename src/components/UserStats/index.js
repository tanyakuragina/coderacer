import React from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import '../Home/home.css'

function UserStats({ name, time, score, index, btn }) {
  return (
    <>
      <tr>
        <td>{index}</td>
        <td>{name}</td>
        <td>{time}</td>
        <td>{score}</td>
        <MDBBtn color="primary">
          <Link to="/game">Войти в игру</Link>
        </MDBBtn>
      </tr>
    </>
  );
}

export default UserStats;
