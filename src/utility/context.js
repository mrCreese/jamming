import { createContext, useContext, useState } from "react";
import { Spotify } from "./Spotify";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [serchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  /* numero di righe per pagina */
  const [itemForPage, setItemForPage] = useState(10);
  /* pagina atuale */
  const [currentPage, setCurrentPage] = useState(1);
  /*   pagination */
  const numberOfVisitedItems = (currentPage - 1) * itemForPage;
  const totalPages = Math.ceil(data.length / itemForPage);
  const displayitems = data.slice(
    numberOfVisitedItems,
    numberOfVisitedItems + itemForPage
  );
  /* cambio pagina */
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1) {
      return;
    }
    if (pageNumber > totalPages) {
      return;
    }
    setCurrentPage(pageNumber);
  };

  const handleChange = (e, destination) => {
    destination(e.target.value);
  };
  const addToPlaylist = (track) => {
    const exist = playlist.filter((item) => item.id === track.id);
    if (exist.length < 1) {
      const temp = [...playlist, track];
      setPlaylist(temp);
    }
  };
  const deleteFromPlaylist = (track) => {
    const filtredPlaylist = playlist.filter((item) => item.id !== track.id);
    setPlaylist(filtredPlaylist);
  };

  const handleSearchValue = async () => {
    const temp = await Spotify.search(serchValue);
    setData(temp);
    /*  const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${serchValue}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8dfda0fd9emshb051bc095cabc95p18bdf9jsn5ecccce7fddc",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      console.error(error);
    } */
  };

  const postPlaylist = async () => {
    const trackUri = playlist.map((track) => track.uri);
    await Spotify.savePlaylist(playlistName, trackUri);
    setPlaylist([]);
    setPlaylistName("");
  };

  return (
    <AppContext.Provider
      value={{
        serchValue,
        data,
        displayitems,
        totalPages,
        currentPage,
        playlist,
        playlistName,
        setPlaylistName,
        setSearchValue,
        handlePageChange,
        handleChange,
        handleSearchValue,
        addToPlaylist,
        deleteFromPlaylist,
        postPlaylist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
