import { useState } from "react";

const Search = ({ searchMovie }) => {
  const [search, setSearch] = useState();

  return (
    <div className="row">
      <div className="input-field">
        <input
          placeholder="Search"
          id="search"
          type="search"
          className="validate"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onBlur={() => searchMovie(search)}
        />
      </div>
    </div>
  );
};

export { Search };
