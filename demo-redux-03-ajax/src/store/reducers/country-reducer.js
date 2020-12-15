import { COUNTRY_ERROR, COUNTRY_FETCH, COUNTRY_LOADING } from "../actions/country-action";

const initialState = {
    onLoading: false,
    data: null,
    onError: false,
    errorMsg : null
}

export const countryReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case COUNTRY_LOADING:
            return {
                ...state,
                onLoading: true,
                data: null,
                onError: false,
                errorMsg : null
            };

        case COUNTRY_FETCH:
            return {
                ...state,
                onLoading: false,
                data: action.payload
            };

        case COUNTRY_ERROR:
            return {
                ...state,
                onLoading: false,
                onError: true,
                errorMsg : action.payload
            };
                
        default:
            return state;
    }
}