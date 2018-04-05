import React, { Component } from 'react';

class CityOption extends Component {
    render() {
        return (
            <option>{this.props.text}</option>
        );
    }
}

CityOption.defaultProps = {
    text: 'N/A'
};

export default CityOption;
