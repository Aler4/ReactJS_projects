import {TQuestion} from "./reducer";


export const ADD_QUESTIONS = 'ADD_QUESTIONS';
export const UPLOAD_QUESTIONS = 'UPLOAD_QUESTIONS';

export const addQuestions = (data: TQuestion[]) => ({data, type: ADD_QUESTIONS});
const uploadQuestions = () => ({type: UPLOAD_QUESTIONS});
