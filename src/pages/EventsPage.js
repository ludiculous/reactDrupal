import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchEvents} from '../actions';
import EventCard from '../components/EventCard.js';

class EventsPage extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		eventType: 'Any',
    		
    	};

	}

	componentDidMount() {
		this.props.fetchEvents()
	}

	handleChangeType(event) {
    	var val = event.target.value
    	this.setState({eventType: val});
    	this.renderEvents(val)
  	}

	renderEvents(type){

	type = this.state.eventType;

	return this.props.eventData.eventdata.map(function (item) {
		
			var et = item.title[0].value;
			var ed = item.field_event_date[0].value;
			var el = item.field_event_location[0].value;
			var ei = item.field_image[0].url;
			var ety = item.field_event_type[0].value;
			var ec = item.field_event_category[0].target_id
				console.log([et,ed,el,ei,ety,ec])
			

			if(type==ety || type == 'Any'){
				return (<EventCard title={et} date={ed} location={el} image={ei} type={ety}/>)
			}	
			else{
				return
			}
			
		})
	}

	render(){
		return(
			<div>
				<h1>Events</h1>
				<h4>filter</h4>
					<form>
			        <label>
			          Filter Event Type
			          <select value={this.state.eventCategory} onClick={this.handleChangeType.bind(this)}>
			            <option value="Live">Live</option>
			           	<option value="Online">Online</option>
			          </select>
			        </label>
			       
			      </form>

			

				{this.renderEvents()}
			</div>
			)
	}
}


const mapStateToProps = (state) =>{
	return {
		eventData:state.Event
	}
}


export default connect(mapStateToProps,{fetchEvents})(EventsPage);