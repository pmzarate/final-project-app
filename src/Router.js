import React from 'react'
import { Switch, Route, Redirect } from  'react-router-dom'
import ReportPage from './containers/ReportPage'

const Router = () => { 
    return (
        <Switch>
            <Route exact path="/" component={ReportPage}/>
        </Switch>
    )
}


export default Router