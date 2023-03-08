import {TState} from "../types";

export const currenciesSelector = (state: TState) => state.currenciesData;
export const generalCurrencySelector = (state: TState) => state.generalCurrency;
export const isLoadSelector = (state: TState) => state.isLoad;
export const isErrorSelector = (state: TState) => state.isError;
export const firstCurrtSelector = (state: TState) => state.firstCurr;
export const secondCurrSelector = (state: TState) => state.secondCurr;
export const titlesSelector = (state: TState) => state.actualTitles;
