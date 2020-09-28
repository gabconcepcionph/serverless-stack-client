import React from "react";
import {Route, Switch, Router} from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import { Auth } from "aws-amplify";

export default function Routes(){
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <UnauthenticatedRoute path="/login">
                <Login/>
            </UnauthenticatedRoute>
            <UnauthenticatedRoute exact path="/signup">
                <Signup/>
            </UnauthenticatedRoute>
            <AuthenticatedRoute exact path="/settings">
                <Settings/>
            </AuthenticatedRoute>
            <AuthenticatedRoute exact path="/notes/new">
                <NewNote/>
            </AuthenticatedRoute>
            <AuthenticatedRoute exact path="/notes/:id">
                <Notes/>
            </AuthenticatedRoute>
            <Route>
                <NotFound/>
            </Route>
        </Switch>
    );
}