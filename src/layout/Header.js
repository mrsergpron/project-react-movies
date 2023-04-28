import styles from "./Header.module.scss";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <a className={styles.logo} href="#">
          React-movies
        </a>
      </div>
      <nav className={styles.header__navigation}>
        <ul>
          <li>
            <a href="#">visit repository</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
