import React, { useEffect } from "react";
import LoginForm from "./LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../actions";


export function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo } = useSelector((state) => state);
  
    useEffect(() => {
      dispatch(getUserInfo());
    }, [dispatch]);
    
    useEffect(()=>{
      if (userInfo?.login) {
        navigate("/");
      }else{
          navigate("/ingresar")
      }
    },[userInfo, navigate])
    

    return(
        <>
            <LoginForm/>
        </>
    )
}