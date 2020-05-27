import React from "react";
import DropDown from "./Dropdown";
import TMDB from "../img/TMDB.svg";
import { Link } from "react-router-dom";

const Header = ({ onSearch, searchTerm, sortValue, onValueSelect }) => {
  return (
    <header className="header">
      <div className="header__wraper">
        <Link to="/">
          <img
            src={TMDB}
            alt="The Movie Database (TMDb)"
            width="154"
            height="20"
          />
        </Link>
        <ul className="header__sidebar">
          <li className="header__item">
            <Link to="/TV_Show">Tv Show</Link>
            <Link to="/trending">Trending</Link>
            <Link to="/changes">Changes</Link>
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
  );
};

export default Header;
