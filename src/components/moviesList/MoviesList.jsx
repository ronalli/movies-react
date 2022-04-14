import { useEffect, useState } from "react";
import { MoviesListItem } from "../moviesListItem/MoviesListItem";
import { Preloader } from "../preloader/Preloader";
import { Search } from "../search/Search";
import { SortMovies } from "../sortMovies/SortMovies";

import "./moviesList.css";

const MoviesList = () => {
  const API_KEY = "df7bf955";
  const [moviesList, setMoviesList] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => saveMovies(data.Search));
  }, []);

  const saveMovies = (movies) => {
    setMoviesList(movies);
  };

  const searchMovie = (movie) => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}`)
      .then((response) => response.json())
      .then((data) => saveMovies(data.Search));
  };

  return (
    <>
      <Search searchMovie={searchMovie} />
      <SortMovies
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <h4>Movies</h4>
      {!moviesList.length || moviesList === undefined ? (
        <Preloader />
      ) : (
        <div className="wrapper">
          {moviesList
            .filter((el) =>
              activeFilter === "all" ? true : el.Type === activeFilter
            )
            .map(({ imdbID, ...props }) => {
              return <MoviesListItem key={imdbID} {...props} />;
            })}
        </div>
      )}
    </>
  );
};

export { MoviesList };
