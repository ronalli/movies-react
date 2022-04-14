import { useState } from "react";
import "./search.css";

const Search = ({ searchMovie }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="row">
      <div className="input-field">
        <input
          value={search}
          placeholder="Search"
          id="search"
          type="search"
          className="validate"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className="btn btn-search"
          onClick={() => {
            searchMovie(search);
            setSearch("");
          }}
        >
          search
        </button>
      </div>
    </div>
  );
};

export { Search };
