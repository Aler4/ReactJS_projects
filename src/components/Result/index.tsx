import {FC} from "react";
import "./style.scss"

type TProp = {
    correct: number,
    questions: object[],
    reload: () => void,
}

export const Result: FC<TProp> = ({correct,questions, reload}) => {
    console.log(correct)
    return (
        <div className="wrapper-result">
            <div className='result'>
                <img className='res_image' src={correct >= Math.round((questions.length / 2)) ? "https://i.ibb.co/x6LqbPZ/congra.webp" : "https://i.ibb.co/7GJ0XtF/sad-cat-1.webp" } alt="" width='200'/>
                <h2>
                    Ви відповіли правильно на <span className={correct >= Math.round((questions.length / 2)) ? "res_pos" : "res_neg"}>{correct}</span> з {questions.length} запитань...
                </h2>
                <button className='btn' onClick={reload}>
                    Нова гра
                </button>
            </div>
        </div>

    )
}
