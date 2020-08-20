import React from 'react';
import { Image } from 'react-bootstrap';

function Avatar({ avatarSource }) {

  return (
    <>
      <Image src="/avatar1.jpg" width={65} roundedCircle />
    </>
  );
}

export default Avatar;
