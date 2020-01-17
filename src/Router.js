import React from 'react'
import { Switch, Route, Redirect } from  'react-router-dom'
import ReportPage from './containers/ReportPage'
import ViewMap from './containers/'

const Router = () => { 
    return (
        <Switch>
            <Route path="/reportPage" component={ReportPage}/>
            <Route path="/viewMap" component={ViewMap}/>
        </Switch>
    )
}


export default Router