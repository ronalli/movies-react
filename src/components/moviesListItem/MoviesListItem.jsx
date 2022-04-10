import "./moviesListItem.css";

const MoviesListItem = ({ Title, Year, imdbID, Type, Poster }) => {
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" alt={Title} src={Poster} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {Title.length > 18 ? `${Title.slice(0, 15)}..` : Title}
        </span>
        <div className="info-movie">
          <p>{Type}</p>
          <p>{Year}</p>
        </div>
      </div>
    </div>
  );
};

export { MoviesListItem };
