import { connect } from 'react-redux'
import { toggleCity } from '../actions'
import SourceCitiesList2 from '../components/SelectFavorites/SourceCitiesList'
// import data from '../indexed_russian_city.list';
//
// function getStartCities() {
//     console.log('getStartCities() data.cities.length=', data.cities.length);
//     return data.cities;
// }
//
// const getVisibleCities = (cities = getStartCities(), filter) => {
//     console.log('getVisibleCities() cities.length=', cities.length);
//     console.log('getVisibleCities() filter=', filter);
//     switch (filter) {
//         case 'A-F':
//             let c = cities.slice(0, 2);
//
//             return c;
//         // case 'SHOW_COMPLETED':
//         //     return todos.filter(t => t.completed)
//         // case 'SHOW_ACTIVE':
//         //     return todos.filter(t => !t.completed)
//         default:
//             // throw new Error('Unknown filter: ' + filter)
//             return cities;
//     }
// }

const mapStateToProps = state => {
    //console.log('visibleCityList mapStateToProps() state=', JSON.stringify(state));
    console.log('visibleCityList mapStateToProps() state.srcList.cities.length=', state.srcList.cities.length);
    return {
        cities: state.srcList.visibleCities//getVisibleCities(state.cities, state.filterGroup)
    };
}

const mapDispatchToProps = dispatch => ({
    toggleCity: id => dispatch(toggleCity(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SourceCitiesList2)
