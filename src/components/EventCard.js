import React, {Component,PropTypes} from 'react';


class EventCard extends Component{

	render(){
			return(
				<div style={cardStyle.container}>
					<span style={cardStyle.default}>title:{this.props.title}</span>
					<span style={cardStyle.default}>date:{this.props.date}</span>
					<span style={cardStyle.default}>location:{this.props.location}</span>
					<span style={cardStyle.default}>image: <img style={cardStyle.img} src={this.props.image}/></span>
					<span style={cardStyle.default}>type:{this.props.type}</span>
				</div>

				)
	}
	
}

const cardStyle = {
	default:{display:'block'},
	container:{marginTop:30,marginLeft:'auto',marginRight:'auto',textAlign:'center'},
	img:{width: 300,
	height: 150}
}


export default EventCard;