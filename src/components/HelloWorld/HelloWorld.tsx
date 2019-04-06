import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const HelloWorld = (props: any) => {
  let { name } = props;
  return (
    <div>
      <FontAwesomeIcon icon={faCoffee} />
      <Title>Hello, {name}!</Title>
    </div>
  );
};

export default HelloWorld;
