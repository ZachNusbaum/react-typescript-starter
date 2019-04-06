import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const HelloWorld = (props: any) => {
  let { name } = props;
  return (
    <div>
      <FontAwesomeIcon icon={faCoffee} />
      <h1>Hello, {name}!</h1>
    </div>
  );
};

export default HelloWorld;
