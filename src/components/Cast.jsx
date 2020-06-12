import React from "react";
import { PATH_IMAGE_FACE } from "../config/configAPI";

const Cast = ({ cast, fullcast }) => {
  if (cast.length > 9) {
    cast.length = 9;
  }
  return (
    <div className="dashbox__top-billed-scroller__cast-scroller">
      <ol className="dashbox__top-billed-scroller__cast">
        {cast.map((item) => (
          <li className="dashbox__top-billed-scroller__card">
            <img
              src={`${PATH_IMAGE_FACE}${item.profile_path}`}
              alt={item.character}
            />
            <h4>{item.name} </h4>
            <p>{item.character}</p>
          </li>
        ))}
        <li className="dashbox__view-more">
          <a href={fullcast} target="blank">
            <p>View More</p>
            <span>
              <i className="fas fa-arrow-right"></i>
            </span>
          </a>
        </li>
      </ol>
    </div>
  );
};

export default Cast;
