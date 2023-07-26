import React from "react";
import SearchBar from "./SearchBar";
import Tracklist from "./Tracklist";
import { useGlobalContext } from "../utility/context";

const Container = () => {
  const { displayitems, data, playlist } = useGlobalContext();
  return (
    <div className="my_container f-col track_container p-6">
      <SearchBar />
      <div className="container-flex between w-100">
        {data.length > 0 && (
          <Tracklist title={"Results"} items={displayitems} createlist={true} />
        )}
        {playlist.length > 0 && (
          <Tracklist title={""} items={playlist} createlist={false} />
        )}
      </div>
    </div>
  );
};

export default Container;
