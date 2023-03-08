import {TAction, TCurrency, TState} from "../types";
import {ADD_CURRENCIES, CHANGE_ERROR, CHANGE_FIRST_CURR, CHANGE_LOAD, CHANGE_SECOND_CURR} from "./actions";


const initialState: TState = {
    generalCurrency: {
        r030: 1,
        txt: 'Українська гривня',
        rate: 1,
        cc: 'UAH',
        exchangedate: '',
    },
    currenciesData: [],
    isLoad: true,
    isError: false,
    firstCurr: {},
    secondCurr: {},
    actualTitles: ['EUR', "USD", 'PLN'],
};

export const exchangeReducer = (state=initialState,action: TAction) => {
    switch (action.type) {
        case ADD_CURRENCIES:
            return {
                ...state,
                currenciesData: [state.generalCurrency,...(action.data as TCurrency[])],
                firstCurr: (state.generalCurrency as TCurrency),
                secondCurr: (state.generalCurrency as TCurrency),
            }
        case CHANGE_FIRST_CURR:
            return {
                ...state,
                firstCurr: (action.data as TCurrency),
            }
        case CHANGE_SECOND_CURR:
            return {
                ...state,
                secondCurr: (action.data as TCurrency),
            }
        case CHANGE_LOAD :
            return {
                ...state,
                isLoad: (action.data as boolean)
            }
        case CHANGE_ERROR :
            return {
                ...state,
                isError: (action.data as boolean)
            }
        default: return state;
    }
}
