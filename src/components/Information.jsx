import React from "react";

const Information = ({ movie }) => {
  return (
    <section className="dashbox__split-column">
      <p>
        <strong>
          <bdi>Status</bdi>
        </strong>
        {movie.status}
      </p>

      <p>
        <strong>
          <bdi>Original Language</bdi>
        </strong>
        {movie.spoken_languages[0].name}
      </p>

      <p>
        <strong>
          <bdi>Budget</bdi>
        </strong>
        ${movie.budget}
      </p>

      <p>
        <strong>
          <bdi>Revenue</bdi>
        </strong>
        ${movie.revenue}
      </p>
    </section>
  );
};

export default Information;
