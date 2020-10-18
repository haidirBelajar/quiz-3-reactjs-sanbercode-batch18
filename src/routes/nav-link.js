import React, {useContext} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export const NavLink = () => {
      

    return (
        <header>
            <div className="header-logo">
                <img src="sadsadasds.png" />
            </div>
        <Route>
                <ul>
                    <li>
                        <Link to="../views/home">Home</Link>
                    </li>
                    <li>
                        <Link to="../views/about">About</Link>
                    </li>
                    <li>
                        <Link to="../views/movie-list">Movie List Editor</Link>
                    </li>
                    <li>
                        <Link to="../views/login">Login</Link>
                    </li>
                </ul>
            </Route>
        </header>
    )
  }

export default NavLink