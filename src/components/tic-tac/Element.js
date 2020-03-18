import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Element extends Component {
    
    render() {
        return (
            <div className="col-md-4 border border-dark" onClick={this.props.onClick} style={{height: '100px'}}>
                <h1 className="p-4">{this.props.value}</h1> 
            </div>
        )
    }
}

Element.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Element;
