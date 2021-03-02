import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { UserContext } from "../Context/userContext";


import styles from './Header.module.css'

const Header = () => {
  const { data } = React.useContext(UserContext);
  
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`} >
        <NavLink className={styles.logo} to="/">
          <Dogs />
        </NavLink>
        {data ? (
          <div style={{ display: "flex" }}>
            <NavLink className={styles.login} to="/minhaConta">
              {`Olá, ${data.username}`}
            </NavLink>
          </div>
        ) : (
          <NavLink className={styles.login} to="/login">
            Login / Criar
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
