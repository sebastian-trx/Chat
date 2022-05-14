import style from "./Chat.module.css";
import socket from "../socket/socket";
import { logout, getUserInfo } from "../actions/index";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function Chat() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state);
  const [message, setMessage] = useState("");
  const [messageHistory, setMessageHistory] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  useEffect(() => {
    if (userInfo?.login) {
      setUser({
        name: userInfo?.name,
        nickName: userInfo?.nickName,
        id: userInfo?.id,
        moderator: userInfo?.moderator,
      });
      navigate("/");
    } else {
      navigate("/ingresar");
    }
  }, [userInfo, navigate]);

  useEffect(() => {
    socket.on("messageHistory", (data) => {
      setMessageHistory([...messageHistory, data]);
    });
    return () => {
      socket.off();
    };
  }, [messageHistory]);


  function handleSubmit(e) {
    e.preventDefault();
    socket.emit("chat", message, user);
    setMessage("");
  }

  function handleLogout() {
    dispatch(logout());
    navigate("/ingresar");
  }
  return (
    <div className={style.container}>
      <div className={style.video}>
        <iframe
          src="https://www.youtube-nocookie.com/embed/adW9o-3uwrE?controls=1"
          title="YouTube video player"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className={style.chat}>
        <div className={style.messageHistory}>
          {messageHistory?.map((item, index) => (
            <div key={index}>
              <div className={style.userMessage}>
                {item.userdata.name}{" "}
                {item.userdata.moderator && <span>(moderador)</span>}:{" "}
              </div>
              {item.msg}
            </div>
          ))}
        </div>
        <div className={style.sendMessage}>
          <form className={style.form} onSubmit={handleSubmit}>
            <textarea
              className={style.textarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className={style.enviar} type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div>
        <button className={style.cerrarSesion} onClick={handleLogout}>Salir</button>
      </div>
    </div>
  );
}
