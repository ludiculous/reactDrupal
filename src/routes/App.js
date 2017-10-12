import React, { Component } from 'react';
import Header from '../components/Header.js';
import { BrowswerRouter, Switch, Route } from 'react-router-dom'
import Events from '../pages/EventsPage.js';

class App extends Component {
  render() {
    return (
      <div className="App page-container">
       		<Header/>
		     
		     <Switch>
		      <Route exact path='/' component={Events}/>
		 	 
		    </Switch>
      </div>
    );
  }
}

export default App;
