import React from "react";
import { useGlobalContext } from "../utility/context";

const Track = ({ track, createlist }) => {
  const { addToPlaylist, deleteFromPlaylist } = useGlobalContext();
  const { name, album, artist, image } = track;
  return (
    <div className="container-center track w-100 gap-10 ">
      <div className="image_container container-center">
        <img
          src={`${image ? image : "./img/vynil.jpg"}`}
          alt={`${album ? album : "vynil"}`}
        />
      </div>
      <div className="container-start between f-col ">
        <div className="">{name}</div>
        <div>{artist}</div>
        <div>{album}</div>
      </div>
      {createlist ? (
        <div className="pt-6 add" onClick={() => addToPlaylist(track)}>
          <i
            className="fa-sharp fa-light fa-plus fa-xl"
            style={{ color: "#ffffff" }}
          ></i>
        </div>
      ) : (
        <div className="pt-6 add" onClick={() => deleteFromPlaylist(track)}>
          <i
            class="fa-sharp fa-solid fa-minus"
            style={{ color: "#ffffff" }}
          ></i>
        </div>
      )}
    </div>
  );
};

export default Track;
