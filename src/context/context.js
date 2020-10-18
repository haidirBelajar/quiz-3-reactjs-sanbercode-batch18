import React, { useState, createContext, useEffect } from "react";
import Axios from 'axios';

export const LoginContext = createContext();

export const LoginProvider = props => {
    const [login, setLogin] = useState(null)
    const [username, setUsername] = useState({
        inputUsername : ""
    });
    const [password, setPassword] = useState({
       inputPassword : ""
    })


        return (
            <LoginContext.Provider value={[login,setLogin,username,setUsername, password, setPassword]}>
              {props.children}
            </LoginContext.Provider>
          );
        
}