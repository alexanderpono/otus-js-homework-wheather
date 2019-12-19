import React, { Component } from 'react';
import CityWheather from './CityWheather';

class CitiesWheatherList extends Component {
    render() {
        return (
            <div>
                <ul>
                {this.props.cities.map((item, index) => (
                    <CityWheather key={index} cityName={item.name}/>
                ))}
                </ul>
            </div>
        );
    }
}

export default CitiesWheatherList;
