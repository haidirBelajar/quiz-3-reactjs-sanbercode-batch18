import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HomeView from '../views/home';
import ContactView from '../views/contact';
import AboutView from '../views/about';
import MLView from '../views/movie-list';
import FormLogin from '../views/login'

const RouterNav = () => {
    return(
        <Switch>
            <Route exact path="/views/home">
                <HomeView />
            </Route>
            <Route exact path="/views/about">
                <AboutView/>
            </Route>
            <Route exact path="/views/movie-list">
                <MLView />
            </Route>
            <Route exact path ="/views/login">
                <FormLogin />
            </Route>
        </Switch>
    )
}

export default RouterNav
