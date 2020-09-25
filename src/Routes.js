import React from "react";
import {Route, Switch, Router} from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";

export default function Routes(){
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route exact path="/signup">
                <Signup/>
            </Route>
            <Route exact path="/notes/new">
                <NewNote/>
            </Route>
            <Route>
                <NotFound/>
            </Route>
        </Switch>
    );
}