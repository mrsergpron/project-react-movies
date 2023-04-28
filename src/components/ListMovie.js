//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=27c55f7a
import React from "react";
import { Movie } from "./Movie";
import styles from "./List.module.scss";

function ListMovie(props) {
  const { movies = [] } = props;

  return (
    <div className={styles.listMovies}>
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h4>Ничего не найдено!</h4>
      )}
    </div>
  );
}

export { ListMovie };
