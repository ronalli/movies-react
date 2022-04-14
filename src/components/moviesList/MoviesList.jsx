import { useEffect, useState } from 'react';
import { MoviesListItem } from '../moviesListItem/MoviesListItem';
import { Preloader } from '../preloader/Preloader';
import { Search } from '../search/Search';
import { SortMovies } from '../sortMovies/SortMovies';

import './moviesList.css';

const MoviesList = () => {
  const API_KEY = 'df7bf955';
  const [loading, setLoading] = useState(true);
  const [moviesList, setMoviesList] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        saveMovies(data.Search);
        setLoading(false);
      });
  }, []);

  const saveMovies = (movies) => {
    setMoviesList(movies);
  };

  const searchMovie = (movie) => {
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}&type=${
        activeFilter === 'all' ? '' : activeFilter
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        saveMovies(data.Search);
        setLoading(false);
      });
  };

  return (
    <>
      <Search searchMovie={searchMovie} />
      <SortMovies
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      {loading ? (
        <Preloader />
      ) : (
        <div className='wrapper'>
          {moviesList === undefined ? (
            <h4>Nothing found</h4>
          ) : (
            moviesList.map(({ imdbID, ...props }) => {
              return <MoviesListItem key={imdbID} {...props} />;
            })
          )}
        </div>
      )}
    </>
  );
};

export { MoviesList };
