import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends Component {
    getColor(percent){
        if(this.props.percent ===100) return 'green'
        return this.props.percent;
    }

    getWidthAsPercentOfTotalWidth(){
        return parseInt(this.props.width * (this.props.percent/100),10);
    }

    render () {
        return (
            <div stlye={{border: 'solid 1px lightgray',width:width}}>
                <div style={{
                    width:this.getWidthAsPercentOfTotalWidth(),
                    height,
                    backgroundColor:this.getColor(percent)
                }}></div>
            </div>
        )
    }
}

export default ProgressBar