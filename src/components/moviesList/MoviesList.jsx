import { useEffect, useState } from "react";
import { MoviesListItem } from "../moviesListItem/MoviesListItem";
import { Preloader } from "../Preloader/Preloader";
import { Search } from "../Search/Search";

import "./moviesList.css";

const MoviesList = () => {
  const API_KEY = "df7bf955";
  const [moviesList, setMoviesList] = useState([]);

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
      <h4>Movies</h4>
      {!moviesList.length ? (
        <Preloader />
      ) : (
        <div className="wrapper">
          {moviesList.map(({ imdbID, ...props }) => {
            return <MoviesListItem key={imdbID} {...props} />;
          })}
        </div>
      )}
    </>
  );
};

export { MoviesList };
