import React from 'react';

const HelloWorld = (props: any) => {
  let { name } = props;
  return <h1>Hello, {name}!</h1>;
};

export default HelloWorld;
