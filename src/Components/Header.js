import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { UserContext } from "../Context/userContext";

import "../css/Header.css";

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className="header">
      <nav className="container nav">
        <NavLink className="logo" to="/">
          <Dogs />
        </NavLink>
        {data ? (
          <div style={{ display: "flex" }}>
            <NavLink className="login" to="minhaConta">
              Minha Conta
            </NavLink>
            <button onClick={userLogout}>Sair</button>
          </div>
        ) : (
          <NavLink className="login" to="/login">
            Login / Criar
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
