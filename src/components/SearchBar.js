import React from "react";
import Input from "./Input";
import Button from "./Button";

const SearchBar = () => {
  return (
    <div className="container-center p-4 gap-7 ">
      <Input />
      <Button name="SEARCH" />
    </div>
  );
};

export default SearchBar;
