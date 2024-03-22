import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <header className={styles.header}>
      <h1>Vite + React {user && `+ ${user.email}`}</h1>

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
        <NavLink
          className={({ isActive }) => {
            return isActive ? styles.activeLink : "";
          }}
          to={"/store"}
        >
          Store
        </NavLink>
        {user ? (
          <button onClick={() => signOut(auth)}>se déconnecter</button>
        ) : (
          <NavLink to={"/register"}>Register</NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
