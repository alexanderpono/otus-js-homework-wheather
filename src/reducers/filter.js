import * as filters from "../constants/constants";
//import data from '../indexed_russian_city.list';

let initialState =
{
    filterGroup : filters.NO_FILTER,
    filterLetter : filters.NO_FILTER,
    pageNo : 0
};


export default function filter(state = initialState, action) {
    return state;
    console.log('filter1() state, action=', state, action);
    switch (action.type) {
        case filters.CLICK_FILTER_GROUP:
            console.log('filter() CLICK_FILTER_GROUP');
            var newState = {...state,
                filterGroup: action.payload,
                filterLetter:filters.NO_FILTER
            };
            // return Object.assign({}, state, {
            //     filterGroup: action.payload
            // });
            return newState;

        case filters.CLICK_FILTER_LETTER:
            console.log('filter() CLICK_FILTER_LETTER');
            newState = {...state, filterLetter: action.payload};
            // return Object.assign({}, state, {
            //     filterGroup: action.payload
            // });
            return newState;

        case filters.CLICK_CLEAR_FILTER:
            console.log('filter() CLICK_CLEAR_FILTER');
            newState = {...state,
                filterGroup: filters.NO_FILTER,
                filterLetter:filters.NO_FILTER
            };
            return newState;

        case filters.CLICK_NAV_PAGE:
            switch (action.payload) {
                case filters.TO_FIRST_PAGE:
                    return {...state, pageNo: 0};

                case filters.TO_LAST_PAGE:
                    return {...state, pageNo: 10};

                case filters.PREV_PAGE:
                    let newPageNo = state.pageNo - 1;
                    if (newPageNo < 0) {
                        newPageNo = 0;
                    };
                    return {...state, pageNo: newPageNo};

                case filters.NEXT_PAGE:
                    newPageNo = state.pageNo + 1;
                    if (newPageNo > 10) {
                        newPageNo = 10;
                    };
                    return {...state, pageNo: newPageNo};

            }
            console.log('filter() CLICK_CLEAR_FILTER');
            newState = {...state,
                filterGroup: filters.NO_FILTER,
                filterLetter:filters.NO_FILTER
            };
            return newState;


        default:
            return state;
    }
}



