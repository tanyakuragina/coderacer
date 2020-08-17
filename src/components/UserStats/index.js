import React from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

function UserStats({ name, time, score, index, btn }) {
  return (
    <>
      <tr>
        <td>{index}</td>
        <td>{name}</td>
        <td>{time}</td>
        <td>{score}</td>
        <MDBBtn color="primary">Enter game</MDBBtn>
      </tr>
    </>
  );
}

export default UserStats;
