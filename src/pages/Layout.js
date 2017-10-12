import React, {Component,PropTypes} from 'react';
import connect from 'react-redux';
import Helmet from 'react-helmet'
import Header from '../components/Header.js';

class Layout extends Component {
	render(){
		return(
			<main>
				<div>
					<Header />
					{this.props.children}
				</div>
			</main>
			)
	}
}

export default Layout