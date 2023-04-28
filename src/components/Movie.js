import styles from "./Movie.module.scss";

function Movie(props) {
  const {
    Title: title,
    Year: year,
    ImdbID: imdbID,
    Type: type,
    Poster: poster,
  } = props;
  return (
    <div className={styles.movie}>
      <div>
        {poster === "N/A" ? (
          <img src={`https://via.placeholder.com/300x500?text=${title}`} />
        ) : (
          <img src={poster} alt={title} />
        )}
      </div>
      <h2>{title}</h2>
      <div>
        <p>
          {year} <span>{type}</span>
        </p>
      </div>
    </div>
  );
}

export { Movie };
