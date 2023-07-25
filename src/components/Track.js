import React from "react";
import { useGlobalContext } from "../utility/context";

const Track = ({ track, btn }) => {
  const { addToPlaylist } = useGlobalContext();
  const { title, album, artist } = track;
  return (
    <div className="container-center track w-50 gap-10 ">
      <div className="image_container container-center">
        <img
          src={`${album.cover ? album.cover : "./img/vynil.jpg"}`}
          alt={`${album.title ? album.title : "vynil"}`}
        />
      </div>
      <div className="container-start between f-col ">
        <div className="">{title}</div>
        <div>{artist.name}</div>
      </div>
      {btn && (
        <div className="pt-6 add" onClick={() => addToPlaylist(track)}>
          <i
            className="fa-sharp fa-light fa-plus fa-xl"
            style={{ color: "#ffffff" }}
          ></i>
        </div>
      )}
    </div>
  );
};

export default Track;
