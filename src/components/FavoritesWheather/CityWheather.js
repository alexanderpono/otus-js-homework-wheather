import React, { Component } from 'react';

class CityWheather extends Component {
    render() {
        return (
            <div className={'CityWheater'}>
                Wheater in city: {this.props.cityName} <br/>
                Temperature: {'0 Celsium'}
            </div>
        );
    }
}

CityWheather.defaultProps = {
    cityName: 'N/A'
};

export default CityWheather;
