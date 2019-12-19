import React, { Component } from 'react';
import CitiesSelector from './CitiesSelector';
import FilterLevel1 from "./FilterLevel1";
import SourceCitiesPaginator from "./SourceCitiesPaginator";
import VisibleCityList from "../../containers/VisibleCityList";


class SelectFavoritesPage extends Component {
    render() {
        return (
                <div className={'favoritesSelectPage'}>
                    <h1>Select favorites</h1>

                    <div className={'favoritesSelectControls'}>
                        <div className={'citiesListContainer'}>
                            <h2>Cities list</h2>
                            <FilterLevel1 activeGroup={2} /> <br />
                            <VisibleCityList /> <br />
                            <SourceCitiesPaginator cities={[]} />
                        </div>
                        <div className={'favoritesContainer'}><CitiesSelector cities={[]}/></div>

                    </div>
                </div>

        );
    }
}

export default SelectFavoritesPage;

