import React from "react";
import Input from "./Input";
import Button from "./Button";
import { useGlobalContext } from "../utility/context";

const SearchBar = () => {
  const { handleSearchValue } = useGlobalContext();

  return (
    <div className="container-center p-4 gap-7 ">
      <Input />
      <Button name="SEARCH" handleClick={handleSearchValue} />
    </div>
  );
};

export default SearchBar;
