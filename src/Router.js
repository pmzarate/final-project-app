import React from 'react'
import { Switch, Route, Redirect } from  'react-router-dom'
import ReportMenu from './containers/ReportMenu'
import ViewMap from './containers/ViewMap'
import AboutPage from './containers/AboutPage'
import Login from './containers/Login'

const Router = () => { 
    return (
        <Switch>
            <Route exact path="/reportMenu" component={ReportMenu}/>
            <Route path="/viewMap" component={ViewMap}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/login" component={Login}/>
        </Switch>
    );
};


export default Router;