import React, { useState, useEffect } from 'react';

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/users');
      const result = await response.json();
      setUsers(result);
    })();
  }, [setUsers]);
  return (
    <>
      {users.map((user) => {
        <div key={user.username}>{user.username}</div>;
      })}
    </>
  );
}
