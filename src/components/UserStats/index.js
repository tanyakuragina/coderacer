import React from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

function UserStats({ name, time, score, index, btn }) {
  return (
    <>
      <MDBTable bordered >
        <MDBTableBody textWhite>
          <td>{index}</td>
          <td>{name}</td>
          <td>{time}</td>
          <td>{score}</td>
          <MDBBtn color="dark">Enter game</MDBBtn>
        </MDBTableBody>
      </MDBTable>
    </>
  );
}

export default UserStats;
