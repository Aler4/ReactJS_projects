import {FC, useEffect, useState} from 'react';
import {TCurrency, TInputProp} from "../../types";
import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import {firstCurrtSelector, generalCurrencySelector, secondCurrSelector} from "../../redux/selectors";
import {changeFirstCurr, changeSecondCurr} from "../../redux/actions";


export const ConvertInput: FC<TInputProp> = ({position,changeValue,count, currencies,activeCurr}) => {
    let [value, setValue] = useState(count);
    let [currency, setCurrency] = useState(activeCurr);
    let dispatch = useDispatch();


    const sendItem = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let title = event.target.value;
        let chosenCurrency = currencies.filter(el => el.txt === title);
        let item = chosenCurrency.length > 0 ? chosenCurrency[0] : activeCurr;
        setCurrency(item);
        position === 1 ? dispatch(changeFirstCurr(item)) : dispatch(changeSecondCurr(item));
    };

    const changeCount = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        changeValue(position, +event.target.value);
    }

    useEffect(() => {
        setValue(count)
    },[count]);

    useEffect(() => {
        changeValue(position,+value)
    },[currency]);


    return (
        <div className='input-wrap'>
            <input value={value} onChange={changeCount} className='currency-inp' type="number" inputMode='numeric' pattern='^[0-9]*$' min='1'/>
            <select onChange={sendItem}   className='currency-select' value={currency.txt} name="" id="">
                {currencies.map(el => (<option key={el.r030} value={el.txt}>{el.txt}</option>))}
            </select>
        </div>
    )
}
