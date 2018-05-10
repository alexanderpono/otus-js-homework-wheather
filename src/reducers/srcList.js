import * as filters from "../constants/constants";
import data from '../indexed_russian_city.list';

let initialState =
{
    filterGroup : filters.NO_FILTER,
    filterLetter : filters.NO_FILTER,
    pageNo : 0,
    cities: data.cities,
    visibleCities: []
};


export default function srcList(state = initialState, action) {
    console.log('srcList() state, action=', state, action);
    let bounds = {start : 0, end : 0};
    switch (action.type) {
        case filters.CLICK_FILTER_GROUP:
            console.log('srcList() CLICK_FILTER_GROUP');

            switch (action.payload) {
                case filters.FILTER_A_F:
                    bounds = getFilteredBounds(
                        ['A', 'B', 'C', 'D', 'E', 'F'], 0, 20);
                    break;

                case filters.FILTER_G_L:
                    bounds = getFilteredBounds(['G', 'H', 'I', 'J', 'K', 'L'], 0, 20);
                    break;

                case filters.FILTER_M_R:
                    bounds = getFilteredBounds(['M', 'N', 'O', 'P', 'Q', 'R'], 0, 20);
                    break;

                case filters.FILTER_S_Z:
                    bounds = getFilteredBounds(['S', 'T', 'U', 'V', 'W', 'X', 'W', 'Z'], 0, 20);
                    break;

                default:

            }
            console.log('reducer srcList() bounds=', bounds);

            let citiesList = initialState.cities.slice(bounds.start, bounds.end);
            console.log('reducer srcList() citiesList=', citiesList);

            let pagedBounds = getBoundsToShow(citiesList.length, 0, 20);
            console.log('reducer srcList() pagedBounds=', pagedBounds);
            let visibleCities = citiesList.slice(pagedBounds.start, pagedBounds.end);


            let newState = {...state,
                filterGroup: action.payload,
                filterLetter:filters.NO_FILTER,
                cities: citiesList,
                visibleCities: visibleCities,
                pageNo: 0
            };
            console.log('reducer srcList() newState.cities.length=', newState.cities.length);
            return newState;




        case filters.CLICK_FILTER_LETTER:
            console.log('srcList() CLICK_FILTER_LETTER');
            bounds = getFilteredBounds([action.payload], 0, 20);
            citiesList = initialState.cities.slice(bounds.start, bounds.end);

            pagedBounds = getBoundsToShow(citiesList.length, 0, 20);
            console.log('reducer srcList() pagedBounds=', pagedBounds);
            visibleCities = citiesList.slice(pagedBounds.start, pagedBounds.end);

            newState = {
                ...state,
                filterLetter: action.payload,
                cities: citiesList,
                visibleCities: visibleCities,
                pageNo: 0
            };
            // return Object.assign({}, state, {
            //     filterGroup: action.payload
            // });
            return newState;


        case filters.CLICK_CLEAR_FILTER:
            console.log('srcList() CLICK_CLEAR_FILTER');
            newState = initialState;
            console.log('reducer cities() newState.cities.length=', newState.cities.length);
            return newState;





        case filters.CLICK_NAV_PAGE:
            console.log('srcList() CLICK_NAV_PAGE');
            let pageSize = 20;
            let tail = state.cities.length % pageSize;
            let totalPages = Math.floor(state.cities.length / pageSize);
            if (tail !== 0) {
                totalPages += 1;
            };
            console.log('srcList() CLICK_NAV_PAGE totalPages=', totalPages);
            let newPageNo = 0;
            switch (action.payload) {
                case filters.TO_FIRST_PAGE:
                    newPageNo = 0;
                    break;

                case filters.TO_LAST_PAGE:
                    newPageNo = totalPages-1;
                    break;

                case filters.PREV_PAGE:
                    newPageNo = state.pageNo - 1;
                    if (newPageNo < 0) {
                        newPageNo = 0;
                    };
                    break;

                case filters.NEXT_PAGE:
                    newPageNo = state.pageNo + 1;
                    if (newPageNo > (totalPages-1)) {
                        newPageNo = totalPages-1;
                    };
                    break;

            }

            pagedBounds = getBoundsToShow(state.cities.length, newPageNo, 20);
            console.log('reducer srcList() pagedBounds=', pagedBounds);
            visibleCities = state.cities.slice(pagedBounds.start, pagedBounds.end);
        //let visibleList =
            return {...state, pageNo: newPageNo, visibleCities: visibleCities};


            // console.log('srcList() CLICK_CLEAR_FILTER');
            // newState = {...state,
            //     filterGroup: filters.NO_FILTER,
            //     filterLetter:filters.NO_FILTER
            // };
            // return newState;

        default:
            return state;
    }
}


function getFilteredBounds(lettersAr, pageNo, pageSize) {
    // let letter = this.props.activeLetter;
    let start = initialState.cities.length+1;
    let end = 0;//initialState.length;

    for (let i=0; i<lettersAr.length; i++) {
        let letter = lettersAr[i];
        let letterInfo = data.index[letter];
        console.log('getFilteredBounds() letterInfo=', letterInfo);
        if (typeof letterInfo === 'undefined') {
            continue;
        };
        if (letterInfo.start < start) {
            start = letterInfo.start;
        };
        if (letterInfo.end > end) {
            end = letterInfo.end;
        };

        //if ()
    }

    // let pageStart = start + pageNo * pageSize;
    // let pageEnd = start + (pageNo + 1) * pageSize;
    // if (pageStart > start) {
    //     start = pageStart;
    // };
    // if (pageEnd < end) {
    //     end = pageEnd;
    // };

    // console.log('letter=', letter);
    // let letterIndexData = data.index[letter];
    // console.log('letterIndexData=', letterIndexData);
    // let start = letterIndexData.start + (pageNo * pageSize);
    // let end = start + pageSize;
    // if (end > letterIndexData.end) {
    //     end = letterIndexData.end;
    // };

    return {start : start, end : end};


    //let cities = this.props.data.cities.slice(letterIndexData.start, letterIndexData.end);

}

function getBoundsToShow(itemsCount, pageNo, pageSize) {
    let start =  pageNo * pageSize;
    let end = (pageNo + 1) * pageSize;
    if (itemsCount < end) {
        end = itemsCount;
    };

    return {start : start, end : end};
}

