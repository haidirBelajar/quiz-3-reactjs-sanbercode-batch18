import React, { useState, createContext, useEffect } from "react";
import Axios from 'axios';

export const LoginContext = createContext();

export const LoginProvider = props => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

    const onChangeUsername = (e) =>{
        const value = e.target.value;
    }

    const onChangePassword = (e) =>{
        const value = e.target.value;
    }


        return (
            <LoginContext.Provider value={[username,setUsername, password, setPassword]}>
              {props.children}
            </LoginContext.Provider>
          );
        
}