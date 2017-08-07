import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/:style' component={Home}/>
            <Redirect to="/outrun" />
        </Switch>
    </BrowserRouter>
);
export default Routes;