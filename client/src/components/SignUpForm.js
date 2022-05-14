import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { localLogin } from "../actions/index";

export function SignUpForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    nickName: "",
    name:"",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function validate(input) {
    let errors = {};
    if (!input.nickName) {
      errors.nickName = "Ingresa tu usuario";
    } else if (!input.name) {
      errors.name = "Ingrese su nombre.";
    } else if (!input.password) {
      errors.password = "Ingrese su contraseña.";
    } else if (Object.entries(errors).length === 0) {
      errors.boton = <button type="submit">registrarme y entrar</button>;
    }
    return errors;
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let response = await axios.post(`/user`, input);
    console.log(response.data);
    if (response.data.type === "failure") {
      alert(response.data.data);
      setInput({
        nickName: "",
        name:"",
        password: "",
      });
    } else {
      dispatch(localLogin(input));
      navigate("/");
    }
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h4>Registrate</h4>
          <div>
            <input
              name="nickName"
              type="text"
              placeholder="usuario"
              value={input.nickName}
              onChange={handleChange}
            ></input>
          </div>
          <div>{errors.nickName && <p>{errors.nickName}</p>}</div>

          <div>
            <input
              name="name"
              type="text"
              placeholder="nombre"
              value={input.name}
              onChange={handleChange}
            ></input>
          </div>
          <div>{errors.name && <p>{errors.name}</p>}</div>

          <div>
            <input
              name="password"
              type="password"
              placeholder="Contraseña"
              value={input.password}
              onChange={handleChange}
            ></input>
          </div>
          <div>{errors.password && <p>{errors.password}</p>}</div>

          {errors.boton}
        </form>

        <h5> ¿Ya tienes cuenta?</h5>
        <Link to="/ingresar">
          <button> Inicia sesión aquí</button>
        </Link>
      </div>
    </div>
  );
}
