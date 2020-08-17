import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserStats from '../UserStats';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';

function UserStatsList() {
  const users = [
    { name: 'vasya43', timeSeconds: 12, score: 2000 },
    { name: 'petya54', timeSeconds: 32, score: 1000 },
    { name: 'sasha23', timeSeconds: 76, score: 4000 },
    { name: 'dima32', timeSeconds: 54, score: 3000 },
    {
      name: 'valya12',
      timeSeconds: 33,
      score: 600000,
      btn: (
        <MDBBtn color="purple" size="sm">
          {' '}
          Button
        </MDBBtn>
      ),
    },
  ];
  // const storeData = store.get
  // console.log();

  return (
    <>
      <div className="d-flex justify-content-center">
        <MDBTable >
          <MDBTableHead color="dark" textWhite>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Time</th>
              <th>Score</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody textWhite>
            {users.map((element, index) => (
              <UserStats
                index={index + 1}
                name={element.name}
                time={element.timeSeconds}
                score={element.score}
                btn={element.btn}
              />
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
    </>
  );
}

export default UserStatsList;
