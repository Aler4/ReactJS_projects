import {TCurrency} from "../types";


export const ADD_CURRENCIES: string = 'ADD_CURRENCIES';
export const CHANGE_FIRST_CURR: string = 'CHANGE_FIRST_CURR';
export const CHANGE_SECOND_CURR: string = 'CHANGE_SECOND_CURR';
export const CHANGE_LOAD: string = 'CHANGE_LOAD';
export const CHANGE_ERROR: string = 'CHANGE_ERROR';

export const addCurrencies = (data: TCurrency[]) => ({data,type: ADD_CURRENCIES});
export const changeFirstCurr = (data: TCurrency) => ({data,type: CHANGE_FIRST_CURR});
export const changeSecondCurr = (data: TCurrency) => ({data,type: CHANGE_SECOND_CURR});
export const changeLoad = (data: boolean) => ({data,type: CHANGE_LOAD});
export const changeError = (data: boolean) => ({data,type: CHANGE_ERROR});
