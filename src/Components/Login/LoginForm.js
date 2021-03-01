import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../Context/userContext";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" {...username} />
        <Input type="password" label="Senha" {...password} />
        {loading ? <Button disabled value="Carregando..." /> : <Button value="Entrar" />}
        {error && <p>{error}</p>}
      </form>
      <Link to="/login/cadastro">Cadastro</Link>
      <Link to="/login/recuperarSenha">Recuperar senha</Link>
      <Link to="/login/resetarSenha">Resetar a senha</Link>
    </section>
  );
};

export default LoginForm;
