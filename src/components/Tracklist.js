import React from "react";
import Track from "./Track";
import { useGlobalContext } from "../utility/context";
import Pagination from "bulma-pagination-react";
import InputName from "./InputName";
import Button from "./Button";

const Tracklist = ({ title, items, createlist }) => {
  const { totalPages, handlePageChange, currentPage, postPlaylist } =
    useGlobalContext();

  return (
    <div className="gap-10 w-40 tracklist_container p-2 px-6">
      {title ? (
        <div className="has-text-white is-size-3">{title}</div>
      ) : (
        <InputName />
      )}
      <div className="container-center f-col ">
        {items.length > 0 &&
          items.map((track) => (
            <Track key={track.id} track={track} createlist={createlist} />
          ))}
      </div>
      {!createlist && (
        <Button name={"SAVE TO SPOTIFY"} handleClick={postPlaylist} />
      )}
      {items.length > 9 && (
        <Pagination
          pages={totalPages}
          onChange={handlePageChange}
          currentPage={currentPage}
          className={"is-centered px-2 is-small custom-pagination py-4"}
        />
      )}
    </div>
  );
};

export default Tracklist;
