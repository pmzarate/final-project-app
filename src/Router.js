import React from 'react'
import { Switch, Route } from  'react-router'
import Home from './containers/Home'
import ReportMenu from './components/ReportMenu'
import ViewMap from './containers/ViewMap'
import AboutPage from './components/AboutPage'
import Login from './components/Login'

const Router = () => { 
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/reportMenu" component={ReportMenu}/>
            <Route path="/viewMap" component={ViewMap}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/login" component={Login}/>
        </Switch>
    );
};


export default Router;