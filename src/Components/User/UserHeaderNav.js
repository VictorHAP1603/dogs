import React from "react";

import { UserContext } from "../../Context/userContext";
import { NavLink, useLocation } from "react-router-dom";

import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as Adicionar } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";

import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          } `}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} user-header-nav ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/minhaConta" end activeClassName={styles.active}>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>

        <NavLink to="estatisticas" activeClassName={styles.active}>
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>

        <NavLink to="postar" activeClassName={styles.active}>
          <Adicionar />
          {mobile && "Adicionar Foto"}
        </NavLink>

        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
