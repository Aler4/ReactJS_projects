import axios from "axios";
import {addQuestions} from "./actions";
import {TQuestion} from "./reducer";
import {AnyAction} from "redux";

export const getQuestionsThunk = (): any => {
    return (dispatch: AnyAction | any) => {
        axios.get('https://63beddcef5cfc0949b6369bc.mockapi.io/Quiz').then(r => dispatch(addQuestions(r.data as unknown as TQuestion[])));
    }
}
