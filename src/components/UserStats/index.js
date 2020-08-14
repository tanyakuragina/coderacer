import React from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

function UserStats({ name, time, score, index, btn }) {
  return (
    <>
      <MDBTableHead color="dark" textWhite>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Time</th>
          <th>Score</th>
        </tr>
      </MDBTableHead>
      <MDBTable bordered striped>
        <MDBTableBody md="auto">
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
