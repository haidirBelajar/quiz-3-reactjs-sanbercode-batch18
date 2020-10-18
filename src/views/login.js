import React, { useState, useContext } from 'react';
import { LoginContext } from '../context/context';
import Axios from 'axios';

const FormLogin = () => {
    // const [login,setLogin] = useContext(LoginContext)
    const [input, setInput] = useState({
        inputUsername:"",
        inputPassword:""
    });
    const onChangeInput = (e) =>{
        const value = e.target.value;
        const name = e.target.name
    }
    return(
       <form>
           <label>Username</label>
           <input type="text" name="username"value={input.inputUsername} onChange={onChangeInput}/>
           <label>Password</label>
           <input type="password" name="password" value={input.inputPassword} />
           <input type="submit" value="login" />
       </form>
    )
}

export default FormLogin