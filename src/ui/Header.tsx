import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Vite + React</h1>

      <nav>
        <NavLink
          className={({ isActive }) => {
            return isActive ? styles.activeLink : "";
          }}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? styles.activeLink : "";
          }}
          to={"/planetes"}
        >
          Planètes
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
