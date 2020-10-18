import React, { useState, useContext } from 'react';
import { LoginContext } from '../context/context';
import Axios from 'axios';

const FormLogin = () => {
    const [username, setUsername] = useState(LoginContext);
    const [password, setPassword] = useState(LoginContext);

    const onChangeUsername = (e) =>{
        const value = e.target.value;
    }

    const onChangePassword = (e) =>{
        const value = e.target.value;
    }

    return(
       <form>
           <label>Username</label>
           <input type="text" name="username"value={username} onChange={onChangeUsername}/>
           <label>Password</label>
           <input type="password" name="password" value={password} onChange={onChangePassword}/>
           <input type="submit" value="login" />
       </form>
    )
}

export default FormLogin