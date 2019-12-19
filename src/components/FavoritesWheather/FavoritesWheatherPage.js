import React, { Component } from 'react';
import CitiesWheatherList from "./CitiesWheatherList";

class FavoritesWheatherPage extends Component {
    render() {
        return (
            <div className={'favoritesWheaterPage'}>
                <h1>Wheater in favorite cities</h1>
                <CitiesWheatherList cities={this.props.cities} />

            </div>
        );
    }
}

export default FavoritesWheatherPage;

