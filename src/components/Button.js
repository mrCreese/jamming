import React from "react";
import { useGlobalContext } from "../utility/context";

const Button = ({ name }) => {
  const { handleSearchValue } = useGlobalContext();
  return (
    <button className="btn" onClick={handleSearchValue}>
      {name}
    </button>
  );
};

export default Button;
