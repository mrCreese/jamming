import React from "react";
import { useGlobalContext } from "../utility/context";

const Input = () => {
  const { searchValue, handleChange, setSearchValue } = useGlobalContext();
  return (
    <div className="floating-label-container  icon-input ">
      <input
        type="text"
        onChange={(e) => handleChange(e, setSearchValue)}
        value={searchValue}
        id="new-search-input"
        className="float-field --t1 icon-right spak input "
        name="song"
        placeholder="Song"
      />
    </div>
  );
};

export default Input;
