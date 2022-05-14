import {SignUpForm} from "./SignUpForm"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../actions";


export function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo } = useSelector((state) => state);
  
    useEffect(() => {
      dispatch(getUserInfo());
    }, [dispatch]);
  
  useEffect(()=>{
    if (userInfo?.login) {
      navigate("/");
    }
  },[userInfo, navigate])

     return(
        <>
           <SignUpForm/>
        </>
    )
}