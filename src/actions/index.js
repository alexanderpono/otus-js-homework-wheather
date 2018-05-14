import {
    CLICK_FILTER_GROUP,
    CLICK_CLEAR_FILTER,
    CLICK_NAV_PAGE
} from '../constants/constants';

export function groupFilter(groupName) {
    return {
        type: CLICK_FILTER_GROUP,
        payload: groupName
    }
}

export function toggleCity(cityName) {
    return {
        type: 'toggleCity',
        payload: cityName
    }
}

export function clearFilter() {
    return {
        type: CLICK_CLEAR_FILTER,
        payload: null
    }
}

export function navPage(butId) {
    return {
        type: CLICK_NAV_PAGE,
        payload: butId
    }
}
