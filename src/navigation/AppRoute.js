import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import routesConfig from './RoutesConfig';
export default function AppRoute(props) {
    const isAuthenticated = useSelector(({ Auth }) => Auth.isAuthenticated.status);
    return (
        <>
            {routesConfig.map((value, index) => (
                <Route key={index} path={value.path} component={value.component} />
            ))}
            {isAuthenticated ? null : <Redirect to="/login" />}
        </>
    )
}