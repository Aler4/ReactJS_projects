export type TState = {
    generalCurrency: TCurrency,
    currenciesData: TCurrency[] | [],
    isLoad: boolean,
    isError: boolean,
    firstCurr: TCurrency | {},
    secondCurr: TCurrency | {},
    actualTitles: string[],
}

export type TCurrency = {
    r030: number,
    txt: string,
    rate: number,
    cc: string,
    exchangedate: string,
}

export type TProp = {
    currencies: TCurrency[] | [],
    firstCurr?: TCurrency,
    secondCurr?: TCurrency
}
export type TInputProp = {
    currencies: TCurrency[] | [],
    count: string | number,
    changeValue: (position: number, count: number) => void,
    position: number,
    activeCurr: TCurrency,
}

export type TData = string | number | boolean | TCurrency[] | TCurrency;
export type TAction = {data: TData, type: string};

