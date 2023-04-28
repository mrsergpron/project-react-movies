import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>©️ {new Date().getFullYear()} copyright</div>
    </footer>
  );
}

export { Footer };
