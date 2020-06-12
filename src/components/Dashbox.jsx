import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import { useParams } from "react-router";
import axios from "axios";
import NotFound from "./NotFound";
import Header from "./Header";
import Footer from "./Footer";
import Cast from "./Cast";
import Crew from "./Crew";
import Information from "./Information";
import {
  PATH_BASE,
  API_KEY,
  PATH_MOVIE,
  PATH_YOUTUBE,
  PATH_BG_IMAGE,
  PATH__IMAGE_POSTER,
  PATH_CREDITS,
} from "../config/configAPI";
import { ScaleLoader } from "react-spinners";
import ChangeMinuteToHours from "../config/ChangeMinuteToHours";
const Dashbox = (props) => {
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState([]);
  const [url, setUrl] = useState("");
  const [date, setDate] = useState("2020");
  const [time, setTime] = useState(null);
  const [cast, setCast] = useState([]);
  const [crews, setCrews] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const queryString = `${PATH_BASE}${PATH_MOVIE}/${id}?api_key=${API_KEY}`;

      const response = await axios.get(queryString);
      const { data: movie } = response;
      const genres = movie.genres;
      const dates = parseInt(movie.release_date);
      setGenre(genres);
      setMovie(movie);
      setDate(dates);

      const movieURL = `${PATH_BASE}${PATH_MOVIE}/${movie.id}/videos?api_key=${API_KEY}`;
      const { data: video } = await axios.get(movieURL);
      if (video.results[0] !== undefined) {
        const urls = `${PATH_YOUTUBE}${video.results[0].key}`;
        setUrl(urls);
      } else {
        return <NotFound />;
      }

      const timeData = ChangeMinuteToHours(movie.runtime);
      setTime(timeData);

      const CastAndCharacter = `${PATH_BASE}${PATH_MOVIE}/${movie.id}${PATH_CREDITS}?api_key=${API_KEY}`;
      const { data: casts } = await axios.get(CastAndCharacter);
      setCast(casts.cast);
      setCrews(casts.crew);
    };
    fetchApi();
  }, [id]);

  const handleLoader = () => {
    setTimeout(() => setLoading(false), 2000);
  };

  const handleSearchChange = () => {};

  const handleNotFound = () => {};

  const bgImg = {
    backgroundImage: `url(${PATH_BG_IMAGE}${movie.backdrop_path})`,
  };

  const ImagePoster = `${PATH__IMAGE_POSTER}${movie.poster_path}`;

  const fullcast = `https://www.themoviedb.org/movie/${movie.id}/cast`;

  if (loading) {
    return (
      <section className="dashbox">
        {handleLoader()}
        <div className="flex-center">
          <ScaleLoader color={"#faca31"} loading={loading} />
        </div>
      </section>
    );
  }

  if (movie.id === undefined) {
    return <NotFound />;
  }

  return (
    <React.Fragment>
      <Header onSearch={handleSearchChange} onValueSelect={handleNotFound} />
      <main>
        <Fade top>
          <section className="dashbox">
            <div className="dashbox__header" style={bgImg}>
              <div className="dashbox__custom-bg">
                <div className="dashbox__singer-column">
                  <section className="dashbox__poster">
                    <div className="dashbox__poster-image">
                      <div className="dashbox__image-content">
                        <img
                          src={ImagePoster}
                          alt={movie.title}
                          className="dashbox__image-content__poster"
                        />
                      </div>
                    </div>
                    <div className="dashbox__poster-wrapper">
                      <section className="dashbox__poster-wrapper__header">
                        <div className="dashbox__title">
                          <h2 className="dashbox__title__h2">
                            {movie.title}

                            <span className="dashbox__title__date">
                              ({date})
                            </span>
                          </h2>
                          <div className="dashbox__title__fact">
                            <span className="dashbox__title__fact__certification">
                              PG-13
                            </span>
                            <span className="dashbox__title__fact__release">
                              {movie.release_date}(US)
                            </span>
                            <div className="dashbox__title__fact__genres">
                              {genre.map((m) => (
                                <span key={m.id}>{m.name}, </span>
                              ))}
                            </div>

                            <span className="dashbox__title__fact__runtime">
                              {time}
                            </span>
                          </div>
                        </div>
                        <ul className="dashbox__list-items">
                          <li className="dashbox__item">
                            <div className="dashbox__detail">
                              <div className="dashbox__outer">
                                <div className="dashbox__user">
                                  <div className="dashbox__percent">
                                    <span className="dashbox__vote">
                                      {movie.vote_average}/10
                                    </span>
                                    <canvas height="60" width="60"></canvas>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dashbox__text">
                              User
                              <br />
                              Score
                            </div>
                          </li>
                          <li className="dashbox__icon thumbnail">
                            <i className="fas fa-list-ul" />
                          </li>
                          <li className="dashbox__icon heart">
                            <i className="fas fa-heart" />
                          </li>
                          <li className="dashbox__icon bookmark">
                            <i className="fas fa-bookmark" />
                          </li>
                          <li className="dashbox__icon star">
                            <i className="fas fa-star" />
                          </li>
                          <li className="dashbox__video">
                            <a href={url} target="blank">
                              <i className="fas fa-play" />
                              Play Trailer
                            </a>
                          </li>
                        </ul>
                        <div className="dashbox__header__infor">
                          <h3 className="dashbox__tagline" dir="auto">
                            {movie.tagline}
                          </h3>
                          <h3 className="dashbox__tagline__h3">Overview</h3>
                          <div dir="auto" className="dashbox__overview">
                            <p>{movie.overview}</p>
                          </div>
                          <Crew crews={crews} />
                        </div>
                      </section>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            <div className="dashbox__media">
              <div className="dashbox__column-wrapper">
                <div className="dashbox__content-column">
                  <div className="dashbox__white-column">
                    <section className="dashbox__top-billed-scroller">
                      <h3>Top Cast</h3>
                      <Cast cast={cast} fullcast={fullcast} />
                    </section>
                  </div>
                  <div className="dashbox__grey-column">
                    <Information movie={movie} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fade>
      </main>
      <Footer />
    </React.Fragment>
  );
};
export default Dashbox;
