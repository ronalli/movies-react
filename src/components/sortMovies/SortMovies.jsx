import { useEffect } from "react";
import "./sortMovies.css";

const SortMovies = ({ activeFilter, setActiveFilter }) => {
  let allRadio = null;
  useEffect(() => {
    allRadio = document.querySelectorAll('input[name="group1"]');
    allRadio.forEach((el) => {
      if (el.dataset.filter === activeFilter) {
        el.setAttribute("checked", true);
      } else {
        el.removeAttribute("checked");
      }
    });
  }, [activeFilter]);

  return (
    <div
      className="buttons-sort"
      onChange={(e) => setActiveFilter(e.target.dataset.filter)}
    >
      <p>
        <label>
          <input
            className="with-gap"
            data-filter="all"
            name="group1"
            type="radio"
          />
          <span>All</span>
        </label>
      </p>
      <p>
        <label>
          <input
            className="with-gap"
            data-filter="movie"
            name="group1"
            type="radio"
          />
          <span>Movies only</span>
        </label>
      </p>
      <p>
        <label>
          <input
            className="with-gap"
            data-filter="series"
            name="group1"
            type="radio"
          />
          <span>Series only</span>
        </label>
      </p>
    </div>
  );
};

export { SortMovies };
