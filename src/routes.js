import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
// import NotFound from './pages/NotFound/NotFound';

const Routes = (props) => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/:style' component={Home}/>
			{/*<Route path='/notfound' component={NotFound}/>*/}
		</Switch>
	</BrowserRouter>
);
export default Routes;