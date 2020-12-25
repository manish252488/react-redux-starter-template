import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import routesConfig from './RoutesConfig';
export default function AppRoute(props) {
    const isAuthenticated = true;
    return isAuthenticated ? (
        routesConfig.map((value, index) => (
            <Route key={index} path={value.path} component={value.component} />
        ))
    ) : <Redirect to="/login" />
}