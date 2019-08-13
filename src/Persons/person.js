import React from "react";

const person = props => {
  return (
    <div>
      <p>
        My name is {props.name} and I am {props.age} years old
      </p>
      <div>{props.children}</div>
    </div>
  );
};

export default person;
