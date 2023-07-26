import React from "react";

const Button = ({ name, handleClick }) => {
  return (
    <button className="btn" onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
