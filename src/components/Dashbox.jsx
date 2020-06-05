import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import { useParams } from "react-router";
import axios from "axios";
import NotFound from "./404NotFound";
import ReactPlayer from "react-player";
import {
  PATH_BASE,
  API_KEY,
  PATH_MOVIE,
  PATH_YOUTUBE,
  PATH_BG_IMAGE,
} from "../config/configAPI";
import Spinner from "./Spinner";
import StarRatingComponent from "react-star-rating-component";

const Dashbox = (props) => {
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState([]);
  const [rating, setRating] = useState(null);
  const [url, setUrl] = useState("");
  const [trailers, setTrailers] = useState(null);
  useEffect(() => {
    const fetchApi = async () => {
      const queryString = `${PATH_BASE}${PATH_MOVIE}/${id}?api_key=${API_KEY}`;

      const response = await axios.get(queryString);
      const { data: movie } = response;
      const genres = movie.genres;
      const fixed_rating = movie.vote_average.toFixed(1);
      setGenre(genres);
      setRating(fixed_rating);
      setMovie(movie);

      const movieURL = `${PATH_BASE}${PATH_MOVIE}/${movie.id}/videos?api_key=${API_KEY}`;
      const { data: video } = await axios.get(movieURL);
      let trailer = video.results[0];
      if (trailer === undefined) {
        trailer = 0;
        setTrailers(trailer);
      }

      const url = `${PATH_YOUTUBE}${trailer.key}`;
      setUrl(url);
    };
    fetchApi();
  }, [id]);

  const handleLoader = () => {
    setTimeout(() => setLoading(false), 1500);
  };

  const handleHome = () => {
    props.history.push("/");
  };
  const bgImg = {
    backgroundImage: `url(${PATH_BG_IMAGE}${movie.backdrop_path})`,
  };
  if (!movie.backdrop_path && loading) {
    return (
      <section className="dashboard">
        {handleLoader()}
        <div className="flex-center">
          <div className="sweet-loading">
            <Spinner />
          </div>
        </div>
      </section>
    );
  }

  if (trailers === 0 || movie.id === undefined) {
    return <NotFound />;
  }
  console.log(movie);
  return (
    <React.Fragment>
      <div className="dashboard-bg" style={bgImg}></div>
      <div className="dashboard-bg__layer"></div>
      <Fade right>
        <React.Fragment>
          <section className="dashboard">
            <div className="dashboard__header">
              <h1 className="dashboard__title">{movie.title}</h1>
              <div className="dashboard__rating">
                <StarRatingComponent
                  name="rate"
                  starColor={"#faca31"}
                  value={rating > 9 ? 10 : rating / 2}
                  emptyStarColor={"#242126"}
                />
                <p className="dashboard__user-rating">{rating} </p>
              </div>
            </div>

            <div className="dashboard__video">
              <ReactPlayer
                url={url}
                controls={true}
                width="960px"
                height="560px"
              />
              {!movie.tagline ? (
                ""
              ) : (
                <h3 className="dashboard__tagline">{`${movie.tagline}`}</h3>
              )}
            </div>

            <div className="dashboard__body">
              <div className="dashboard__group">
                <div style={{ fontSize: "1.3rem" }}>
                  {genre.map((m) => (
                    <span key={m.id}>{m.name} / </span>
                  ))}
                  <span>{movie.release_date} / </span>
                  <span>{!movie.runtime ? "" : `${movie.runtime}min`}</span>
                </div>

                <div className="dashboard__btn-group">
                  <a
                    href="/"
                    onClick={handleHome}
                    className="dashboard__btn dashboard__home"
                  >
                    <div className="dashboard__icon">
                      <i
                        style={{ marginRight: "0.7rem" }}
                        className="fa fa-long-arrow-left"
                      />
                      <i className="fa fa-home" />
                    </div>
                  </a>
                  <a
                    href={`https://www.themoviedb.org/movie/${movie.id}/cast`}
                    className="dashboard__btn"
                  >
                    Full Cast
                    <div
                      style={{ marginLeft: "0.7rem" }}
                      className="dashboard__icon"
                    >
                      <i className="fa fa-caret-right" />
                    </div>
                  </a>
                </div>
              </div>
              <p className="dashboard__overview">{movie.overview}</p>
            </div>
          </section>
        </React.Fragment>
      </Fade>
    </React.Fragment>
  );
};
export default Dashbox;
