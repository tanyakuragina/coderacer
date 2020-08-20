import React from 'react';
import { Image } from 'react-bootstrap';

function Avatar({ avatarSource }) {

  
  return (
    <>
      <Image src={avatarSource} width={65} roundedCircle />
    </>
  );
}

export default Avatar;
