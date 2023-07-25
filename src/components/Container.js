import React from "react";
import SearchBar from "./SearchBar";
import Tracklist from "./Tracklist";
import { useGlobalContext } from "../utility/context";

const Container = () => {
  const {
    displayitems,

    data,
    playlist,
  } = useGlobalContext();
  return (
    <div className="my_container f-col track_container p-6">
      <SearchBar />
      <div className="w-100">
        {data.length && (
          <Tracklist title={"Results"} items={displayitems} pagination={true} />
        )}
        {playlist.length && <Tracklist title={"Playlist"} />}
      </div>
    </div>
  );
};

export default Container;
