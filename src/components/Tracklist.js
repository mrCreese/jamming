import React from "react";
import Track from "./Track";
import { useGlobalContext } from "../utility/context";
import Pagination from "bulma-pagination-react";

const Tracklist = ({ title, items, btn }) => {
  const { totalPages, handlePageChange, currentPage } = useGlobalContext();

  return (
    <div className="gap-10 w-40 tracklist_container p-2">
      <div className="has-text-white is-size-3">{title}</div>
      <div className="container-center f-col ">
        {items.length > 0 &&
          items.map((track) => (
            <Track key={track.id} track={track} btn={btn} />
          ))}
      </div>
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
