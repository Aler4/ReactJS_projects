import './style.scss';
import {FC, useEffect, useState} from "react";

type TProp = {
    question: {
        title: string,
        answers: string[],
        correct: number,
    },
    onAnswering: (index: number) => void,
}

export const Game:FC<TProp> = ({question,onAnswering}) => {
    const [show, setShow] = useState(true);
    const [isCorrect, setCorrect] = useState(false)
    const showCard = () => {
        setShow(false);
    };
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
            setCorrect(false)
        },500)
    },[question]);

    const onClickAnswer = (i: number) => {
        setShow(false);
        onAnswering(i);
        if (i === question.correct) {
            setCorrect(true)
        }
    }
    return (
        <div className="wrapper">
            <div className={`game ${show ? 'show' : 'hide'}`} >
                {
                    show ? <>
                        <h1>Як перевести: <br/>
                            "{question?.title}"
                        </h1>
                        <ul>
                            {question?.answers.map((el, i) => <li key={el} onClick={() => onClickAnswer(i)}>{el}</li>)}
                        </ul>
                    </> : <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <h1 style={{color: `${isCorrect ? "green" : 'red'}`}}>{
                            isCorrect ? "Correct!" : "Wrong!"
                        }</h1>
                    </div>
                }

            </div>

        </div>
    )
};
