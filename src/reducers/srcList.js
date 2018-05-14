import * as filters from "../constants/constants";
import data from '../indexed_russian_city.list';

let initialState =
{
    filterGroup : filters.NO_FILTER,
    pageNo : 0,
    cities: data.cities,
    visibleCities: data.cities.slice(0, 20)
};


export default function srcList(state = initialState, action) {
    console.log('srcList() state, action=', state, action);
    switch (action.type) {
        case filters.CLICK_FILTER_GROUP:
            return onFilterGroup(state, action);

        case filters.CLICK_CLEAR_FILTER:
            return onClearFilter(state, action);

        case filters.CLICK_NAV_PAGE:
            return onClickNavPage(state, action);

        default:
            return state;
    }
}


function onFilterGroup(state, action) {
    console.log('srcList() onFilterGroup() CLICK_FILTER_GROUP');
    let bounds = {start : 0, end : 0};

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
    console.log('reducer srcList onFilterGroup() bounds=', bounds);

    let citiesList = initialState.cities.slice(bounds.start, bounds.end);
    console.log('reducer srcList onFilterGroup() citiesList=', citiesList);

    let pagedBounds = getBoundsToShow(citiesList.length, 0, 20);
    console.log('reducer srcList onFilterGroup() pagedBounds=', pagedBounds);
    let visibleCities = citiesList.slice(pagedBounds.start, pagedBounds.end);


    let newState = {...state,
        filterGroup: action.payload,
        cities: citiesList,
        visibleCities: visibleCities,
        pageNo: 0
    };
    console.log('reducer srcList() newState.cities.length=', newState.cities.length);
    return newState;
}


function onClickNavPage(state, action) {
    console.log('srcList onClickNavPage() CLICK_NAV_PAGE');
    let pageSize = 20;
    let tail = state.cities.length % pageSize;
    let totalPages = Math.floor(state.cities.length / pageSize);
    if (tail !== 0) {
        totalPages += 1;
    };
    console.log('srcList onClickNavPage() CLICK_NAV_PAGE totalPages=', totalPages);
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
        default:
    }

    let pagedBounds = getBoundsToShow(state.cities.length, newPageNo, 20);
    console.log('reducer srcList onClickNavPage() pagedBounds=', pagedBounds);
    let visibleCities = state.cities.slice(pagedBounds.start, pagedBounds.end);
    return {...state, pageNo: newPageNo, visibleCities: visibleCities};

}


function onClearFilter(state, action) {
    console.log('srcList onClearFilter() CLICK_CLEAR_FILTER');
    let newState = initialState;
    console.log('reducer cities onClearFilter() newState.cities.length=', newState.cities.length);
    return newState;

}


function getFilteredBounds(lettersAr, pageNo, pageSize) {
    let start = initialState.cities.length+1;
    let end = 0;

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
    }
    return {start : start, end : end};
}


function getBoundsToShow(itemsCount, pageNo, pageSize) {
    let start =  pageNo * pageSize;
    let end = (pageNo + 1) * pageSize;
    if (itemsCount < end) {
        end = itemsCount;
    };

    return {start : start, end : end};
}

