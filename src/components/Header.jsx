import React from "react";
import DropDown from "./Dropdown";
import TMDB from "../img/TMDB.svg";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Header = ({
  onSearch,
  searchTerm,
  sortValue,
  onValueSelect,
  loading,
}) => {
  const home = () =>
    toast("🦄 Wellcome Home!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const movie = () =>
    toast.warning("🦄 Wellcome The Movie !", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const tvShow = () =>
    toast.info("🦄 Wellcome TvShow!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const trending = () =>
    toast("🦄 Wellcome Trending!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <div>
      <ToastContainer />
      <header className="header">
        <div className="header__wraper">
          <Link to="/">
            <img
              className="header__img"
              src={TMDB}
              alt="The Movie Database (TMDb)"
              onClick={home}
            />
          </Link>
          <ul className="header__sidebar">
            <li className="header__item">
              <Link onClick={movie} to="/movie">
                Moive
              </Link>
              <Link to="/TV_Show" onClick={tvShow}>
                Tv Show
              </Link>
              <Link to="/trending" onClick={trending}>
                Trending
              </Link>
            </li>
          </ul>
        </div>
        <form className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search Moive..."
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
          />

          <button className="search__button">
            <i className="search__icon fa fa-search"></i>
          </button>
        </form>
        <DropDown sortValue={sortValue} onValueSelect={onValueSelect} />
      </header>
    </div>
  );
};

export default Header;
