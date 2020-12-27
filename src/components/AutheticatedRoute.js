import React from "react";
import { Route, Redirect } from "react-router-dom";
import {useSelector} from "react-redux";

export default function AuthenticatedRoute({ Component, path, redirectPath }) {

    const isLoggedIn = useSelector(store => store.AppReducer.isLoggedIn);

    return (
        <Route
            exact
            path = {path}
            render = { routeProps => (
                isLoggedIn
                    ?
                    <Component {...routeProps}/>
                    :
                    <Redirect
                        to={redirectPath}
                    />
            )}
        />
    );
}
