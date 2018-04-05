import React, { Component } from 'react';
import CitiesSelector from './CitiesSelector';
import FilterLevel1 from "./FilterLevel1";
import FilterLevel2 from "./FilterLevel2";
import SourceCitiesList from "./SourceCitiesList";
import SourceCitiesPaginator from "./SourceCitiesPaginator";


class SelectFavoritesPage extends Component {
    render() {
        return (
                <div className={'favoritesSelectPage'}>
                    <h1>Select favorites</h1>

                    <div className={'favoritesSelectControls'}>
                        <div className={'citiesListContainer'}>
                            <h2>Cities list</h2>
                            <FilterLevel1 /> <br />
                            <FilterLevel2 /> <br />
                            <SourceCitiesList cities={this.props.cities} pageNo={0}/> <br />
                            <SourceCitiesPaginator cities={this.props.cities} />
                        </div>
                        <div className={'favoritesContainer'}><CitiesSelector cities={this.props.cities}/></div>

                    </div>
                </div>

        );
    }
}

export default SelectFavoritesPage;

