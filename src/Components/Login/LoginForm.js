import React from "react";
import { Link } from "react-router-dom";
import Error from '../Helper/Error'
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../Context/userContext";

import '../../css/Form/LoginForm.css'
import '../../css/Form/Button.css'

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
    <section className="animeLeft" >
      <h1 className="title" >Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" {...username} />
        <Input type="password" label="Senha" {...password} />
        {loading ? <Button disabled value="Carregando..." /> : <Button value="Entrar" />}
        <Error error={error} />
      </form>
      <Link className="perdeu" to="/login/recuperarSenha">Perdeu a senha ?</Link>
      <div className="cadastro">
        <h2 className="subtitle" >Cadastre-se</h2>
        <p>Ainda não possui conta ? Cadastre-se no site</p>
        <Link className="button" to="/login/criar" >Cadastro</Link>
      </div>
    </section>
  );
};

export default LoginForm;
