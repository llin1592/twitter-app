import React from "react";

const Person = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.bio}</p>
    </div>
  );
};

export default Person;
