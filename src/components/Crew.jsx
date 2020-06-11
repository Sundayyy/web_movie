import React from "react";

const Crew = ({ crews }) => {
  return (
    <ul className="dashbox__people">
      <li className="dashbox__profile">
        <h4>{crews[0].name}</h4>
        <p>{crews[0].job} </p>
      </li>
      <li className="dashbox__profile">
        <h4>{crews[1].name}</h4>
        <p>{crews[1].job} </p>
      </li>
      <li className="dashbox__profile">
        <h4>{crews[2].name}</h4>
        <p>{crews[2].job} </p>
      </li>
      <li className="dashbox__profile">
        <h4>{crews[3].name}</h4>
        <p>{crews[3].job} </p>
      </li>
      <li className="dashbox__profile">
        <h4>{crews[4].name}</h4>
        <p>{crews[4].job} </p>
      </li>
      <li className="dashbox__profile">
        <h4>{crews[5].name}</h4>
        <p>{crews[5].job} </p>
      </li>
    </ul>
  );
};

export default Crew;
