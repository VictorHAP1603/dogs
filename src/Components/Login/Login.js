import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";

import "../../css/Login/Login.css";
import { UserContext } from "../../Context/userContext";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/minhaConta" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="cadastro" element={<LoginCreate />} />
        <Route path="recuperarSenha" element={<LoginPasswordLost />} />
        <Route path="resetarSenha" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
