import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";

import styles from './Login.module.css'

import { UserContext } from "../../Context/userContext";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/minhaConta" />;
  return (
    <section className={styles.login} >
      <div className={styles.forms} >
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="recuperarSenha" element={<LoginPasswordLost />} />
          <Route path="resetarSenha" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
