import styles from "./Preloader.module.scss";

function Preloader() {
  return (
    <div className={styles.preloader}>
      <h4>Loading ...</h4>
    </div>
  );
}

export { Preloader };
