import { useEffect, useState } from "react";
import { MoviesListItem } from "../moviesListItem/MoviesListItem";

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

  return (
    <>
      <h4>Movies</h4>
      <div className="wrapper">
        {!moviesList ? (
          <h5>Loading...</h5>
        ) : (
          moviesList.map(({ imdbID, ...props }) => {
            return <MoviesListItem key={imdbID} {...props} />;
          })
        )}
      </div>
    </>
  );
};

export { MoviesList };
