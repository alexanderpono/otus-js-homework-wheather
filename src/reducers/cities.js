import data from '../indexed_russian_city.list';
import * as filters from "../constants/constants";

let initialState = data.cities;//.slice(0, 2000);
// {
//     filterGroup : FILTER_A_F
// };

// let PAGE_SIZE = 20;
// let bounds = this.getBoundsToShow(letter, this.props.pageNo, PAGE_SIZE);
// console.log('bounds=', bounds);


export default function cities(state = initialState, action) {
    return state;
    console.log('cities() state=, action=', state, action);
    let bounds = {start : 0, end : 0};
    switch (action.type) {
        case filters.CLICK_FILTER_GROUP:
            switch (action.payload) {
                case filters.FILTER_A_F:
                    bounds = getBoundsToShow(
                        ['A', 'B', 'C', 'D', 'E', 'F'], 0, 20);
                    break;

                case filters.FILTER_G_L:
                    bounds = getBoundsToShow(['G', 'H', 'I', 'J', 'K', 'L'], 0, 20);
                    break;

                case filters.FILTER_M_R:
                    bounds = getBoundsToShow(['M', 'N', 'O', 'P', 'Q', 'R'], 0, 20);
                    break;

                case filters.FILTER_S_Z:
                    bounds = getBoundsToShow(['S', 'T', 'U', 'V', 'W', 'X', 'W', 'Z'], 0, 20);
                    break;

                default:

            }
            console.log('reducer cities() bounds=', bounds);
            // console.log('filter() CLICK_FILTER_GROUP');
            // let newState = {...state, filterGroup: action.payload};
            // // return Object.assign({}, state, {
            // //     filterGroup: action.payload
            // // });
            let newState = initialState.slice(bounds.start, bounds.end);
            console.log('reducer cities() newState.length=', newState.length);
            return newState;

        case filters.CLICK_CLEAR_FILTER:
            newState = initialState;
            console.log('reducer cities() newState.length=', newState.length);
            return newState;

        case filters.CLICK_FILTER_LETTER:
            bounds = getBoundsToShow([action.payload], 0, 20);
            newState = initialState.slice(bounds.start, bounds.end);
            return newState;

        default:
            return state;
    };

}


function getBoundsToShow(lettersAr, pageNo, pageSize) {
    // let letter = this.props.activeLetter;
    let start = initialState.length+1;
    let end = 0;//initialState.length;

    for (let i=0; i<lettersAr.length; i++) {
        let letter = lettersAr[i];
        let letterInfo = data.index[letter];
        console.log('getBoundsToShow() letterInfo=', letterInfo);
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

    let pageStart = start + pageNo * pageSize;
    let pageEnd = start + (pageNo + 1) * pageSize;
    if (pageStart > start) {
        start = pageStart;
    };
    if (pageEnd < end) {
        end = pageEnd;
    };

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

