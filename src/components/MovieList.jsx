import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { PATH_IMAGE } from "../config/configAPI";
import placeholderImg from "../img/placeholderImg.jpg";
const MovieList = ({ movies, onGenres }) => {
  return (
    <section className="flex-grid">
      {movies.map((movie) => (
        <Fade key={movie.id}>
          <div className="card" to={`movie/${movie.id}`}>
            <Link to={`/movie/${movie.id}`} className="card__inner-wrapper">
              <img
                className="card__img"
                src={
                  movie.poster_path
                    ? `${PATH_IMAGE}${movie.poster_path}`
                    : placeholderImg
                }
                alt={movie.title}
              />
              <div className="card__rating">
                <i className="card__icon fa fa-star" />
                <span>{movie.vote_average.toFixed(1)} </span>
              </div>
              <p className="card__title">{movie.title}</p>
              <p className="card__genre">{onGenres(movie)}</p>
            </Link>
          </div>
        </Fade>
      ))}
    </section>
  );
};

export default MovieList;
