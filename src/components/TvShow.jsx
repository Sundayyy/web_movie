import React, { useState, useEffect } from "react";
import Header from "./Header";
import MovieList from "./MovieList";
import MovieLoader from "./MovieLoader";
import {
  API_KEY,
  PATH_SEARCH,
  PATH_PAGE,
  PATH_BASE,
  PATH_TVSHOW,
} from "../config/configAPI";
import axios from "axios";
import { getGenres } from "../config/genre";
import Pagination from "./Pagination";
import Footer from "./Footer";
const TvShow = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortValue, setSortValue] = useState("popular");
  const [bounce] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      const url = `${PATH_BASE}${PATH_TVSHOW}/${sortValue}?api_key=${API_KEY}${PATH_PAGE}${currentPage}`;
      try {
        const response = await axios.get(url);
        let movies = response.data.results;
        const pages = response.data.total_pages;
        setTotalPages(pages);
        setMovies(movies);
        setLoading(false);
      } catch (error) {}
    };
    fetchAPI();
  }, [currentPage, sortValue]);

  useEffect(() => {
    const url = `${PATH_BASE}${PATH_SEARCH}${PATH_TVSHOW}?api_key=${API_KEY}&query=${searchTerm}${PATH_PAGE}${currentPage}`;
    const fetchAPI = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        setMovies(data.results);
      } catch (error) {}
    };
    fetchAPI();
  }, [searchTerm, currentPage]);

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
      setSortValue("top_rated");
    } else if (value === "Now Playing") {
      setSortValue("airing_today");
    } else if (value === "Up Coming") {
      setSortValue("on_the_air");
    } else if (value === "Populaity") {
      setSortValue("popular");
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

export default TvShow;
