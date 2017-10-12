import React from 'react';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import App from './App.js';
import Events from '../pages/EventsPage';
import Layout from '../pages/Layout';
const Routes = () => (
	<Router>
		<Layout>
				 <Route  exact path="/"component={Events}/>
				
		</Layout>
	</Router>
);

export default Routes