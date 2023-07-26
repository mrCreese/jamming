import React from "react";
import { useGlobalContext } from "../utility/context";

const InputName = () => {
  const { playlistName, handleChange, setPlaylistName } = useGlobalContext();

  return (
    <div className="custom-input pb-1">
      <input
        className="is-size-3 "
        type="text"
        value={playlistName}
        onChange={(e) => handleChange(e, setPlaylistName)}
        placeholder="Name playlist"
      />
    </div>
  );
};

export default InputName;
