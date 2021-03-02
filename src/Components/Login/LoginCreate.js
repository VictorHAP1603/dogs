import React from "react";

import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/userContext'

import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Error from '../Helper/Error'

import useForm from '../../Hooks/useForm'
// import styles from './LoginCreate.module.css'
import { USER_POST } from "../../api";
import useFetch from "../../Hooks/useFetch";



const LoginCreate = () => {
  
  const navigate = useNavigate();
  const username = useForm()
  const email = useForm('email')
  const password = useForm()

  const { userLogin } = React.useContext(UserContext)
  const { loading, erro, request } = useFetch()

  async function createUser(event) {
      event.preventDefault()
      const { url, options } = USER_POST({
        username: username.value,
        email: email.value,
        password: password.value
      })

      const { response } = await request(url, options)
      if (response.ok) {
        userLogin(username.value, password.value)
        navigate('/minhaConta')
      } 
  }

  return <section className="animeLeft">
    <h1 className="title">Cadastro</h1>
    <form onSubmit={createUser}>
      <Input type="text" label="Usuário" name="username" {...username} />
      <Input type="email" label="Email" name="email" {...email} />
      <Input type="password" label="Senha" name="password" {...password} />

      {loading ? <Button disabled value="Cadastrando..." /> : <Button value="Cadastrar" />}
      <Error error={erro} />
    </form>
  </section>;
};

export default LoginCreate;
