import React from "react";
import TheMovieDB from "../img/TheMovieDB.svg";
const Footer = () => {
  return (
    <div className="footer">
      <nav className="footer__nav">
        <div className="footer__img">
          <a href="https://www.themoviedb.org/" target="blank">
            <img src={TheMovieDB} alt="The movie database" />
          </a>
        </div>
        <div>
          <h3>THE BASICS</h3>
          <ul>
            <li>
              <a href="https://www.themoviedb.org/about" target="blank">
                About TMDB
              </a>
            </li>
            <li>
              <a
                href="https://www.themoviedb.org/about/staying-in-touch"
                target="blank"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a href="https://www.themoviedb.org/talk" target="blank">
                Support Forums
              </a>
            </li>
            <li>
              <a
                href="https://www.themoviedb.org/documentation/api"
                target="blank"
              >
                API
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>GET INVOLVED</h3>
          <ul>
            <li>
              <a href="https://www.themoviedb.org/bible" target="blank">
                Contribution Bible
              </a>
            </li>
            <li>
              <a href="https://www.themoviedb.org/apps" target="blank">
                3rd Part Applications
              </a>
            </li>
            <li>
              <a href="https://www.themoviedb.org/movie/new" target="blank">
                {" "}
                Add New Movie{" "}
              </a>
            </li>
            <li>
              <a href="https://www.themoviedb.org/tv/new" target="blank">
                {" "}
                Add New TV Show
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>COMMUNITY</h3>
          <ul>
            <li>
              <a
                href="https://www.themoviedb.org/documentation/community/guidelines"
                target="blank"
              >
                Guidelines
              </a>
            </li>
            <li>
              <a href="https://www.themoviedb.org/discuss" target="blank">
                Discussions
              </a>
            </li>
            <li>
              <a href="https://www.themoviedb.org/leaderboard" target="blank">
                Leaderboard
              </a>
            </li>
            <li>
              <a href="https://twitter.com/themoviedb" target="blank">
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>LEGAL</h3>
          <ul>
            <li>
              <a href="https://www.themoviedb.org/terms-of-use" target="blank">
                Terms of Us
              </a>
            </li>
            <li>
              <a
                href="https://www.themoviedb.org/documentation/api/terms-of-use"
                target="blank"
              >
                API Terms of Use
              </a>
            </li>
            <li>
              <a
                href="https://www.themoviedb.org/privacy-policy"
                target="blank"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
