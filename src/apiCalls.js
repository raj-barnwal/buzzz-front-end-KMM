import axios from "axios";
import { useEffect, useState } from "react";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("http://localhost:5000/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const user=()=>{
  
const fetchUser= async()=>{
  const result =await axios.get(`http://localhost:5000/api/users/6251871b34db952c4ebf5928`);
  console.log("from user",result);
  return(result.data);
};
}
