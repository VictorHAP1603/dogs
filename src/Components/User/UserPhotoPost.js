import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../../Components/Helper/Error";

import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";

import styles from "./UserPhotoPost.module.css";
import { PHOTO_POST } from "../../api";
import { useNavigate } from "react-router";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = React.useState({});

  const { data, erro, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate("/minhaConta");
  }, [data, navigate]);

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          className={styles.files}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled value="Enviando..." />
        ) : (
          <Button value="Enviar" />
        )}

        <Error error={erro} />
      </form>
      {img.preview && (
        <div
          className={styles.preview}
          style={{ backgroundImage: `url('${img.preview}')` }}
        ></div>
      )}
    </section>
  );
};

export default UserPhotoPost;
