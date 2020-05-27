import React from "react";

const Dropdown = ({ sortValue, onValueSelect }) => {
  return (
    <div className="dropdown">
      <input type="submit" value="Populaity" className="dropdown__input" />
      <ul className="dropdown__content">
        <li
          className="dropdown__item"
          onClick={(e) => onValueSelect(e.target.textContent)}
        >
          Top Rated
        </li>
        <li
          className="dropdown__item"
          onClick={(e) => onValueSelect(e.target.textContent)}
        >
          Now Playing
        </li>
        <li
          className="dropdown__item"
          onClick={(e) => onValueSelect(e.target.textContent)}
        >
          Up Coming
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
