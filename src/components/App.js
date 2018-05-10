import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SelectFavoritesPage from "./SelectFavorites/SelectFavoritesPage";
import FavoritesWheatherPage from "./FavoritesWheather/FavoritesWheatherPage";
// import data from '../indexed_russian_city.list';

const cities = [
    {
        "id": 524901,
        "name": "Moscow",
        "country": "RU",
        "coord": {
            "lon": 37.615555,
            "lat": 55.75222
        }
    },
    {
        "id": 498817,
        "name": "Saint Petersburg",
        "country": "RU",
        "coord": {
            "lon": 30.264168,
            "lat": 59.894444
        }
    },
    {
        "id": 2013348,
        "name": "Vladivostok",
        "country": "RU",
        "coord": {
            "lon": 131.873535,
            "lat": 43.105621
        }
    },
];

const menu = [
    {text: 'Select favorites', ref: "#favorites_select"},
    {text: 'Wheather in favorites', ref: "#favorites_wheather"},
    {text: 'About', ref: "#about"},
]

class App extends Component {
    constructor() {
        super();
        this.state = {
            filterGroup: 'A-F'
        };
    }

    render() {
        // console.log('data.length=', data.length);
        return (
            <div>
                <div className="App">
                    <Header menu={menu}/>
                </div>
                <SelectFavoritesPage />
                <FavoritesWheatherPage cities={cities} />
            </div>
        );
    }
}


export default App;
