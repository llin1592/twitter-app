import React from "react";

// We can destructure 'props' into {onClick, children} to know what fields we need
// easier and not have to type 'props' before each variable
const CoolButton = ({ onClick, children }) => {
  // props.children refers to the thing between the opening and closing tags
  // Ex. "Add Book" is the props.children in <CoolButton>Add Book</ CoolButton
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "purple",
        color: "white",
        paddinng: 16,
        borderRadius: 12,
      }}
    >
      {children}
    </button>
  );
};

export default CoolButton;
