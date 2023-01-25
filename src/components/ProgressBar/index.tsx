import {FC, useEffect, useState} from "react";
import './style.scss';
import {TQuestion} from "../../redux/reducer";

type TProp = {
    lenght: number,
    step: number,
}

export const ProgressBar:FC<TProp> = ({lenght,step}) => {
    const [progress, setProgress] = useState(0);
    const percent = (lenght / 100);
    useEffect(() => {
        setProgress(step / percent)
    },[step]);
    return (
        <div className='wrapp'>
            <h4 className='counter'>{`${progress ? progress : 0}%`}</h4>
            <div className={`inner ${progress == 100 ? 'finished' : ''}`} style={{width: `${progress}%`}}></div>
        </div>
    )
};
