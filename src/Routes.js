import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Operations from './Operations';


const Routes = () => {
	return (
		<Switch>
			<Route exact path="/add/:num1/:num2">
				<Operations operation="add" />
			</Route>

			<Route exact path="/subtract/:num1/:num2">
				<Operations operation="subtract" />
			</Route>

			<Route exact path="/multiply/:num1/:num2">
				<Operations operation="multiply" />
			</Route>

			<Route exact path="/divide/:num1/:num2">
				<Operations operation="divide" />
			</Route>

			<Redirect to="/" />
		</Switch>
	);
}

export default Routes;