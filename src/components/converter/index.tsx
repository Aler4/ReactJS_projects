import {FC, useCallback, useEffect, useState} from 'react';
import {ConvertInput} from "../convertInput";
import {TCurrency, TProp} from "../../types";
import {useSelector} from "react-redux";
import {firstCurrtSelector, secondCurrSelector} from "../../redux/selectors";
import './style.scss'


export const Converter:FC<TProp> = ({currencies}) => {

    let firstCurr = useSelector(firstCurrtSelector);
    let secondCurr = useSelector(secondCurrSelector);

    let [firstInpValue, setFirstInpValue] = useState(currencies[0].rate);
    let [secondInpValue, setSecondInpValue] = useState((currencies[0] as TCurrency).rate);

    let [firstCount, setFirstCount] = useState(1);
    let [secondCount, setSecondCount] = useState(1);

    let convert: number = 1;

    const setValue = useCallback((position: number,count:number) => {

        if(position === 1) {
            setFirstCount(count)
        }

        if (position === 2) {
            setSecondCount(count)
        }

    },[currencies]);

   useEffect(() => {
       convert = +(( (firstCurr as TCurrency).rate / (secondCurr as TCurrency).rate ) * firstCount).toFixed(3)
       setSecondInpValue(convert);
   },[firstCurr,firstCount]);

    useEffect(() => {
        convert = +(( (secondCurr as TCurrency).rate / (firstCurr as TCurrency).rate ) * secondCount).toFixed(3)
        setFirstInpValue(convert);
    },[secondCurr,secondCount]);



    return (
        <div className='converter-wrap'>
            <ConvertInput position={1} changeValue={setValue} count={firstInpValue} activeCurr={currencies[0]} currencies={currencies}  />
            <ConvertInput position={2} changeValue={setValue} count={secondInpValue} activeCurr={currencies[0]}  currencies={currencies}  />
        </div>
    )
}
