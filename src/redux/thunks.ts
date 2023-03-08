import {AnyAction} from "redux";
import {addCurrencies, changeError, changeLoad} from "./actions";
import {TCurrency} from "../types";


export const getCurrenciesThunk = (curr: string[]): any => {
    return (dispatch: AnyAction | any) => {
        fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => data.filter((el: TCurrency) => curr.includes(el.cc)))
            .then(data => {
            dispatch(addCurrencies(data));
            }).catch(() => dispatch(changeError(true))).finally(() => dispatch(changeLoad(false)))
    }
}
