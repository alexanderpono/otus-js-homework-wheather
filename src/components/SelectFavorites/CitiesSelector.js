import React, { Component } from 'react';
import CityOption from './CityOption';
import Button from '../Button';

class CitiesSelector extends Component {
    render() {
        return (
            <div className="CitiesSelector">
                <h2>Favorite cities:</h2>

                <select name="sometext" multiple="multiple" size={10}>
                    {this.props.cities.map((item, index) => (<CityOption key={index} text={item.name} />))}
                </select>

                <Button caption={'Remove from favorites'}/>

            </div>
        );
    }

}

export default CitiesSelector;
