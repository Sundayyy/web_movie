import React, { useState, useEffect } from "react";
import Header from "./Header";
import MovieList from "./MovieList";
import MovieLoader from "./MovieLoader";
import {
  API_KEY,
  PATH_SEARCH,
  PATH_PAGE,
  DEFAULT_PAGE,
  PATH_BASE,
  PATH_TRENDING,
  PATH_MOVIE,
  PATH_WEEK,
} from "../config/configAPI";
import axios from "axios";
import { getGenres } from "../config/genre";
import Pagination from "./Pagination";
import Footer from "./Footer";

const People = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortValue, setSortValue] = useState("all");
  const [bounce] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      const url = `${PATH_BASE}${PATH_TRENDING}/${sortValue}${PATH_WEEK}?api_key=${API_KEY}${PATH_PAGE}${currentPage}`;
      try {
        const response = await axios.get(url);
        let movies = response.data.results;
        setMovies(movies);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, [currentPage, sortValue]);

  useEffect(() => {
    const url = `${PATH_BASE}${PATH_SEARCH}${PATH_MOVIE}?api_key=${API_KEY}&query=${searchTerm}${PATH_PAGE}${DEFAULT_PAGE}`;
    const fetchAPI = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        setMovies(data.results);
      } catch (error) {}
    };
    fetchAPI();
  }, [searchTerm]);

  const handleGenres = (movie) => {
    return getGenres().map((m) =>
      m.id === movie.genre_ids[0] ? m.name : null
    );
  };
  const handleSearchChange = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleSortValue = (value) => {
    if (value === "Top Rated") {
      setSortValue("tv");
    } else if (value === "Now Playing") {
      setSortValue("movie");
    } else if (value === "Up Coming") {
      setSortValue("all");
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <Header
        onSearch={handleSearchChange}
        searchTerm={searchTerm}
        sortValue={sortValue}
        onValueSelect={handleSortValue}
      />
      <main className="flex-container">
        <div className="content-flex">
          <MovieLoader movies={movies} loading={loading} bounce={bounce} />
          <MovieList movies={movies} onGenres={handleGenres} />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default People;
