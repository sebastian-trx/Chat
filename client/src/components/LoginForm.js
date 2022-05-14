import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { localLogin, getUserInfo } from '../actions/index'

export default function LoginForm() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    nickName: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function validate(input) {
    let errors = {};
    if (!input.nickName) {
      errors.nickName = "Ingresa tu nickname";
    } else if (!input.password) {
      errors.password = "Ingrese su contraseña.";
    }
    else if (Object.entries(errors).length === 0){
        errors.boton = <button type="submit">entrar</button>
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

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(localLogin(input));
    setTimeout(() => {
      dispatch(getUserInfo());
    }, 1000);
  }


  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h4>Inicia Sesión</h4>
          <div>
            <input
              name="nickName"
              type="text"
              placeholder="nickname"
              value={input.nickName}
              onChange={handleChange}
            ></input>
          </div>
          <div>{errors.nickName && <p>{errors.nickName}</p>}</div>

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

        <h5> ¿Aún no tienes cuenta?</h5>
        <Link to="/registrarme">
          <button> Registrate aquí</button>
        </Link>
      </div>
    </div>
  );
}
