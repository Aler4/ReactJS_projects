import {ADD_QUESTIONS} from "./actions";

export type TQuestion = {
    title: string,
    answers: string[],
    "correct": number,
};
export type TState = {
    questions: TQuestion[] | [],
};

const initialState: TState = {
    questions: [],
};

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_QUESTIONS : {
            return {
                ...state,
                questions: action.data
            };
        }
        default: return state;
    }
}
